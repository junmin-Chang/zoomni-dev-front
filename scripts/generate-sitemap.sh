cd public

echo "기존 사이트맵 제거"
rm -rf sitemap
echo "사이트맵 디렉토리 새로 생성"
mkdir sitemap

cd ..
cd scripts

node ./robots.js

echo "정적 사이트맵 생성중..."
node ./sitemap-common.js
echo "정적 사이트맵 생성 완료"

echo "동적 사이트맵 조회 및 생성 중"
node ./sitemap-posts.js
echo "동적 사이트맵 생성 완료"

echo "사이트맵 gzip 압축 중"
node ./compress.js
node ./generator.js
echo "사이트맵 압축 완료"

curl http://google.com/ping?sitemap=https://www.z00mni.com/sitemap.xml
echo "Google에 사이트맵 핑 전송"