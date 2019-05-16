## Şimdilik
Node js platformunda, express kullanarak veri tabanı bağlantısı ORM ile sağlanmıştır.Sunucu tarafında express-graphql kullanılmıştır. Client tarafında ayrı bir sunucu ve React kullanarak Apollo-GraphQL ile iki sunucu arası iletişim sağlanmıştır. Login, logout, register işlemlerini gerçekleştiren bu küçük uygulamada, validasyonu işlemleri için Yup kütüphanesi kullanılmıştır. Frontend için Formik kütüphanesi, Material-ui framework'ü ve buna hibrit olarak bootstrap'ın grid sistemi kullanılmıştır.

### Çalıştırmak için
- Sequelize ORM kütüphanesinin desteklediği veri tabanlarından birinin sisteminizde yüklü olması  gerekir. ( MySQL, MSSQL, PostgreSQL, MariaDB, SQLite )
- `Server/src/config/.env` dosyası içinden ilgili bağlantı ayarlarını gerçekleştirmelisiniz.
- Sequelize, ilgili veri tabanı için ek kütüphane yüklemenizi isteyebilir. <a href="http://docs.sequelizejs.com/manual/getting-started.html">Sequelize Docs</a>

#### Birinci terminal
```yarn
cd Server/
yarn
yarn start
```
#### İkinci terminal
```yarn
cd ClientReact/
yarn
yarn start
```
