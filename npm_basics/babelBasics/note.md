# Babel

[Babel](https://babeljs.io/) temelde yazdığımız modern javascript kodlarını ES5 versiyonuna çeviren bir modüldür. Bu bizlere güncel olmayan tarayıcılarda desteklenmeyen ES6+ versiyon kodlarının çalışabilir olmasını sağlar çünkü babel bizim için ES5'e çevirme işlemi yapar ve bu kodlar tüm tarayıcılar tarafından desteklenir (Internet Explorer 11 dahil).

> dipnot: [bu web sayfasından](https://compat-table.github.io/compat-table) ECMAScript tarayıcı desteklerine bakabilirsiniz

Elbette kafanızda şu soru oluşmuş olabilir; "2024'te kullandığımız tarayıcılar yeteri kadar gelişmişken ve ES6+'ı desteklerken neden bu modülü kullanma zahmetine giriyoruz?". Bu haklı bir soru ancak yazdığınız projeye bağlı olarak cevabın değişkenlik göstereceği de bir soru.

1. Eğer projeniz geniş çaplıysa, geniş çaplı bir projenin her işletim sisteminde ve her tarayıcıda çalışabilir olması elzemdir, aksi durumda kullanıcı kaybedersiniz ve endüstri standartlarına uygun bir ürün ortaya koymaktan uzak olursunuz.
2. Eğer projenizin çapı yeni nesil tarayıcılara destek verecek boyuttaysa bu modülü kullanmanıza ihtiyacınız yoktur.
3. Eğer profesyonel olarak web developer olarak şirketlerde para kazanmayı planlıyorsanız ya da açık kaynaklı bir web projesine katkıda bulunmak istiyorsanız emin olun ki burada gereksinimleri sizin belirleyemediğiniz ve mecbur kaldığınız aşamalar olacaktır. Babel modülünü kullanıp kullanmama seçeneği de bunlardan bir tanesidir. Bir çok şirket ve açık kaynaklı proje babel modülünü kullanmaktadır, yazılımcılarının da bilmesini beklemektedir. Ancak sizin babel modülünü bilmediğiniz durumda bu gibi projelere katkı sağlamanız zor olacaktır.

Babel'ı tanıdımıza göre babel'ı kullanmaya başlayalım.

## Babel modülünü kullanmak için projemize indirmemiz gereken modüller

### Adım 1

1. @babel/cli
    > bu modül komut satırı arayüzünden (comand line interface) babel'ı kullanmanızı sağlar.
2. @babel/core
    >bu modül temelde ES6+'ı ES5'e dönüştürme işlemini yapmamızı sağlar.
3. babel-polyfill
    > bu modül async-await fonksiyonları tüm tarayıcılarda tam olarak kullanmamızı sağlar.
4. @babel/preset-env
    > bu modül ECMAScript versiyonlarının presetlerini içinde barındıran bir modüldür. Uygun preset seçilip ES5'e dönüşümü yapılır.

```
npm install @babel/cli @babel/core babel-polyfill @babel/preset-env --save-dev
```

> dipnot: bu modül yalnızca geliştirme ortamında işinize yarıyacağı için devDependency olarak kurulumunu yapmanızı sağlayacak komutu sizlerle paylaştım. Aksi durumu tercih ederseniz komuttan `--save-dev` etiketini silebilirsiniz. 

### Adım 2

Bu adımda ayar (config) dosyası oluşturmamız gerekmektedir. Yapmanız gereken şey projenizin altında bir `babel.config.json` isimli dosya oluşturmak. Bu dosyayı oluşturma amacımız ihtiyaç doğrultusunda dönüştürme işleminde kullanacağımız presetleri seçmektir. Yani babel'e aynı bir dil çevirme uygulaması kullanırken belirttiğimiz çevirmek istediğimiz dil tercihleri gibi şu versiyondan şu versiyona çevir komutunu vereceğiz.

babel.config.json dosyasının içine eklenecek kod:
```
{
    "presets": ["@babel/preset-env"]
}
```

### Adım 3

Gerekli modülleri indirdikten sonra babel'ı konsol ortamında kullanabilmek için `babel.cmd` dosyasının yolunu belirtmemiz gerekmektedir aksi durumda konsol babel'ı bulamayacaktır. Bu sebeple `node_moduls` klasörünün içindeki `.bin` klasörüne ve onunda içindeki `babel.cmd` dosyasına ulaşmamız gerekmekte ve bu şekilde komudu çalıştırmamız gekemektedir.

Windows için:

```
.\node_modules\.bin\babel
```

Linux ve Mac için:

```
./node_modules/.bin/babel
```

### Adım 4

Bu adımda dönüştürme işlemini yapacağız bunun için örnek olarak `src` klasöründeki ES6+ versiyon kodlara sahip .js dosyalarını `lib` klasörünün altında aynı isimde yeni .js dosyaları üretip ES5 versiyonuna dönüştüren komutu kullanacağız.

> bu aşamada javascript dosyalarınızın `src` klasöründe olması gerekmektedir, aksi durumda `src` klasörü dışındaki javascript dosyalarınızı ES5'e çevirip `lib` klasörüne atmayacaktır!

Dönüştürme Komut'u:
```
.\node_modules\.bin\babel src --out-dir lib
```

>dipnot: bu komut çok uzun olduğundan dolayı dilerseniz bu kodu `package.json` dosyanızın içindeki `script` objesinin içerisine ekleyebilirsiniz. Ancak burada `.\node_modules\.bin\babel` kullanımı yerine `babel` yazmanız gerekmektedir, bunun sebebi `package.json` dosyasının modülün ayar dosyası olmasıdır ve babel'ı otomatik bulabilmesidir.

Örnek komut:
```
babel src --out-dir lib
```

Örnek komutun package.json'a eklenmesi:
```
{
  "name": "babelbasics",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src --out-dir lib" <--- Komut kısayolumuzu buraya ekledik.
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.23.9",
    "@babel/core": "^7.23.9",
    "@babel/preset-env": "^7.23.9",
    "babel-polyfill": "^6.26.0"
  }
}
```

> Artık konsol ekranında `npm run buid` yazdığınız zaman kısa yol komudunuz çalışmış olacaktır.

### Adım 5 (Son)

Başardınız artık javascript dosyalarınız bütün tarayıcılarda kullanılmaya hazır.

## Son söz

Umarım siz değerli okurlarıma bir faydam dokunmuştur. Aklınıza takılan veya sormak istediğiniz soruları yssk.personal@gmail.com adresine email atabilir ya da [LinkedIn](https://www.linkedin.com/in/yavuz-samet-kan/) hesama mesaj göndererek sorabilirsiniz, dilerseniz herhangi bir konuda iletişime geçmek için de yazabilirsiniz. Buraya kadar okuduğunuz için teşekkür ederim, bugsız kodlamalar. :)
