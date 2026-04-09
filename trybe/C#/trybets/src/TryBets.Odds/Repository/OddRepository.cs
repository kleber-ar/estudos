using TryBets.Odds.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Globalization;

namespace TryBets.Odds.Repository;

public class OddRepository : IOddRepository
{
    protected readonly ITryBetsContext _context;
    public OddRepository(ITryBetsContext context)
    {
        _context = context;
    }

    public Match Patch(int MatchId, int TeamId, string BetValue)
    {
        string betValueConverted = BetValue.Replace(',', '.');
        
        decimal betValueDecimal = Decimal.Parse(betValueConverted, CultureInfo.InvariantCulture);

            var match = _context.Matches.FirstOrDefault(m => m.MatchId == MatchId);

            if (match == null)
            {
                throw new Exception($"Match with id {MatchId} not found.");
            }

            if (TeamId == match.MatchTeamAId)
            {
                match.MatchTeamAValue += betValueDecimal;
            }
            else if (TeamId == match.MatchTeamBId)
            {
                match.MatchTeamBValue += betValueDecimal;
            }
            else
            {
                throw new Exception($"Team with id {TeamId} not found in match {MatchId}.");
            }

            _context.SaveChanges();

            return match;
    }
}
