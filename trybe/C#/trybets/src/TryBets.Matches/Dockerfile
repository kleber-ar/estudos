FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 5502
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "TryBets.Matches.dll"]
