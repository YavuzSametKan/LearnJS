# Babel

[Babel](https://babeljs.io/) temelde yazdığımız modern javascript kodlarını ES5 versiyonuna çeviren bir modüldür. Bu bizlere güncel olmayan tarayıcılarda desteklenmeyen ES6+ versiyon kodlarının çalışabilir olmasını sağlar çünkü babel bizim için ES5'e çevirme işlemi yapar ve bu kodlar tüm tarayıcılar tarafından desteklenir (Internet Explorer 11 dahil).

dipnot: [bu web sayfasından](https://compat-table.github.io/compat-table) ECMAScript tarayıcı desteklerine bakabilirsiniz

Elbette kafanızda şu soru oluşmuş olabilir; "2024'te kullandığımız tarayıcılar yeteri kadar gelişmişken ve ES6+'ı desteklerken neden bu modülü kullanma zahmetine giriyoruz?". Bu haklı bir soru ancak yazdığınız projeye bağlı olarak cevabın değişkenlik göstereceği de bir soru.

1. Eğer projeniz geniş çaplıysa, geniş çaplı bir projenin her işletim sisteminde ve her tarayıcıda çalışabilir olması elzemdir, aksi durumda kullanıcı kaybedersiniz ve endüstri standartlarına uygun bir ürün ortaya koymaktan uzak olursunuz.
2. Eğer projenizin çapı yeni nesil tarayıcılara destek verecek boyuttaysa bu modülü kullanmanıza ihtiyacınız yoktur.
3. Eğer profesyonel olarak web developer olarak şirketlerde para kazanmayı planlıyorsanız ya da açık kaynaklı bir web projesine katkıda bulunmak istiyorsanız emin olun ki burada gereksinimleri sizin belirleyemediğiniz ve mecbur kaldığınız aşamalar olacaktır. Babel modülünü kullanıp kullanmama seçeneği de bunlardan bir tanesidir. Bir çok şirket ve açık kaynaklı proje babel modülünü kullanmaktadır, yazılımcılarının da bilmesini beklemektedir. Ancak sizin babel modülünü bilmediğiniz durumda bu gibi projelere katkı sağlamanız zor olacaktır.

Babel'ı tanıdımıza göre babel'ı kullanmaya başlayalım.

## Babel modülünü kullanmak için projemize indirmemiz gereken modüller

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

dipnot: bu modül yalnızca geliştirme ortamında işinize yarıyacağı için devDependency olarak kurulumunu yapmanızı sağlayacak komutu sizlerle paylaştım. Aksi durumu tercih ederseniz komuttan `--save-dev` etiketini silebilirsiniz. 


