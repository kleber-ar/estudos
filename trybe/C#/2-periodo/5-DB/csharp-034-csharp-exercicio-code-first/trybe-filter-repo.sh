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
    --path src/code-first.Test.Test/ContextTest.cs \
    --path src/code-first.Test.Test/DbTest.cs \
    --path src/code-first.Test.Test/MarketContextTest.cs \
    --path src/code-first.Test.Test/ModelsTest.cs \
    --path src/code-first.Test.Test/Usings.cs \
    --path src/code-first.Test.Test/code-first.Test.Test.csproj \
    --path src/code-first.Test.Test \
    --path src/src.sln \
    --path README.md \
    --path .gitignore \
    --path trybe-filter-repo.sh \
    --invert-paths --force