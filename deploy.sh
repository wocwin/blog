# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:wocwin/my-vuePress.git master:build-pages

git remote add origin git@github.com:wocwin/my-vuePress.git
git push origin --delete build-pages
git push origin master:build-pages

cd -
