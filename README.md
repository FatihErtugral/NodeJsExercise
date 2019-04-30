## Şimdilik
Node js platformunda, express kullanarak veri tabanı bağlantısı ORM ile sağlanmıştır. API bağlantısı PassportJS ile valide edip servis edilmiştir. Client tarafında ayrı bir sunucu ve React kullanarak axios kütüphanesiyle iki sunucu arası iletişim sağlanmıştır. Login, logout, register işlemlerini gerçekleştiren bu küçük uygulamada, client validasyonu için Yup ve Formik kütüphaneleri kullanılmıştır. Frontend için Material-ui framework'ü ve buna hibrit olarak bootstrap'ın grid sistemi kullanılmıştır.

## Çalıştırmak için
- Sequelize ORM kütüphanesinin desteklediği veri tabanlarından birinin sisteminizde yüklü olması  gerekir. ( MySQL, MSSQL, PostgreSQL, MariaDB, SQLite )
- `Server/src/config/.env` dosyası içinden ilgili bağlantı ayarlarını gerçekleştirmelisiniz.
- Sequelize, ilgili veri tabanı için ek kütüphane yüklemenizi isteyebilir. <a href="http://docs.sequelizejs.com/manual/getting-started.html">Sequelize Docs</a>

### Birinci terminal
```npm
cd Server/
yarn
yarn start
```
### İkinci terminal
```npm
cd ClientReact/
yarn
yarn start
```
