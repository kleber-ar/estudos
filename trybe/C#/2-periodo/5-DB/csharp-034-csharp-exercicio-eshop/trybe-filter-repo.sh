### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'trybe-publisher' fornecido 
## pela Trybe. 

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path trybe.yml \
    --path src/EShop.Test.Test/EShopContext.cs \
    --path src/EShop.Test.Test/Req1.cs \
    --path src/EShop.Test.Test/Req2.cs \
    --path src/EShop.Test.Test/Usings.cs \
    --path src/EShopTest.Test/EShop.Test.Test.csproj \
    --path src/EShopTest.Test \
    --path src/src.sln \
    --path README.md \
    --path .gitignore \
    --path trybe-filter-repo.sh \
    --invert-paths --force