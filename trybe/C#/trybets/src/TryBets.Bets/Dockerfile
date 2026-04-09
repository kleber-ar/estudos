FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0
EXPOSE 5503
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "TryBets.Bets.dll"]
