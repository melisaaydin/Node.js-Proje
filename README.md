Node.js ve MySQL ile Ürün Yönetim Uygulaması

Bu proje, Node.js, Express.js ve MySQL kullanarak basit bir ürün yönetim sistemi oluşturur. Kullanıcılar ürünleri listeleyebilir, detaylarını görüntüleyebilir.

# Gerekli Kurulumlar

Projeyi çalıştırmadan önce aşağıdaki yazılımların sisteminizde kurulu olduğundan emin olun:

- Node.js (v18 veya üstü önerilir)

- MySQL

- Git

# 🛠 Kullanılan Teknolojiler

- Node.js & Express.js - Sunucu taraflı uygulama

- MySQL - Veritabanı yönetimi

- EJS - Şablon motoru

- Bootstrap - Kullanıcı arayüzü tasarımı

## Projeyi kurulumu

# 1) Projeyi Klonlayın

git clone https://github.com/melisaaydin/Node.js-Proje.git

 cd Node.js-Proje

# 2)Bağımlılıkları Kurun
  npm install

# 3)MySQL Bağlantısını Yapılandırın

config.js dosyanızı düzenleyerek MySQL bilgilerinizi girin
module.exports = {
    db: {
        host: "localhost",
        user: "root",
        password: "SIFRENIZ",
        database: "nodejs",
        port: 3306
    }
};

# 4)Veritabanını Hazırlayın

Aşağıdaki SQL sorgusunu MySQL'de çalıştırarak products tablosunu oluşturun:

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    imageUrl VARCHAR(255)
);

# 5)Uygulamayı Çalıştırın
nodemon index.js (nodemon kullanıyorsanız.)

Sunucu başarıyla çalıştığında şu adrese giderek uygulamayı kullanabilirsiniz:
http://localhost:3000

# 📌 Proje Yapısı
📁 nodejs-projem
├── 📁 public          # Statik dosyalar (CSS, JS, resimler)
├── 📁 views           # EJS şablon dosyaları
├── 📁 routes          # Express yönlendirme dosyaları
├── index.js          # Ana sunucu dosyası
├── config.js         # Veritabanı bağlantı ayarları
├── package.json      # Proje bağımlılıkları
