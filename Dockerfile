FROM node:16-alpine3.11 AS client
WORKDIR /nextasp/src/client
COPY ./src/client/package*.json /nextasp/src/client
RUN npm i
COPY ./src/client/ /nextasp/src/client
RUN npm run export
COPY ./src/client/out /release/out

FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS server
EXPOSE 80
ENV ASPNETCORE_URLS=http://+:80
RUN apt-get update
RUN apt-get -y install nodejs
WORKDIR /nextasp/src/api
COPY ./src/api/api.csproj /nextasp/src/api
RUN dotnet restore "api.csproj"
COPY ./src/api /nextasp/src/api
RUN dotnet publish -c Release -o /release
COPY --from=client /release/out /release/out
WORKDIR /release
ENTRYPOINT ["dotnet", "api.dll"]


