// html'den eleman çağırma
const form = document.querySelector('form');
const main = document.querySelector('main');

//  formun gönderilme olayını izleme
form.addEventListener("submit", getInput);

//! kullancı bilgisini alır
//! ve buna göre arayüzü ekrana basar
function renderProfile(user) {
    console.log(user)
    main.innerHTML = `
    <section id="left">
        <img src="${user.avatar_url}" alt="">
        <a href="${user.html_url}" target="_blank">Profili Göster</a>
    </section>
    <section id="right">
       <div>
            <span>Açık Repolar: ${user.public_repos}</span>
            <span>Açık Gistler: ${user.public_gists}</span>
            <span>Takipçiler: ${user.followers}</span>
            <span>Takip Edilenler: ${user.following}</span>
       </div>
       <ul>
            <li>Hakkında: ${user.bio}</li>
            <li>Şirket: ${user.company}</li>
            <li>Website: ${user.blog}</li>
            <li>Konum: ${user.location}</li>
            <li>Hesap Oluşturma Tarihi: ${user.created_at}</li>
       </ul>
    </section>
  `
}

//! formdan kullanıcı adını alır
function getInput(event) {
    event.preventDefault();

    // inputa yazılan kullanıcı adı
    const username = event.target[0].value;

    // veritabanında inputta kullanıcyı isteme
    fetch(`https://api.github.com/users/${username}`)
        //   gelen cevabı işle
        .then((res) => res.json())
        // veriyi ekrana yaz
        .then((data) => renderProfile(data));
}