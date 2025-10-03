const form = document.getElementById("infoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // جمع القيم
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const telegram = document.getElementById("telegram").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();

  // --- تحديث البطاقة الأمامية ---
  document.querySelector(".fullname").textContent = name || "Your Name";
  document.querySelector(".role").textContent = role || "Your Role";

  // لو موجود رقم الهاتف
  document.querySelector(".phone").innerHTML = phone
    ? `<i class="fa-solid fa-phone"></i> ${phone}`
    : `<i class="fa-solid fa-phone"></i> ---`;

  // لو موجود ايميل
  document.querySelector(".email").innerHTML = email
    ? `<i class="fa-solid fa-envelope"></i> ${email}`
    : `<i class="fa-solid fa-envelope"></i> ---`;

  // --- تحديث البطاقة الخلفية (الجانب الأيسر) ---
  document.querySelector(".telegram").innerHTML = telegram
    ? `<i class="fa-brands fa-telegram"></i> @${telegram}`
    : `<i class="fa-brands fa-telegram"></i> ---`;

  document.querySelector(".whatsapp").innerHTML = whatsapp
    ? `<i class="fa-brands fa-whatsapp"></i> ${whatsapp}`
    : `<i class="fa-brands fa-whatsapp"></i> ---`;

  // --- تحديث QR Code (الجانب الأيمن) ---
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";

  // إذا أدخل المستخدم رقم واتساب فقط
  if (whatsapp) {
    let whatsappLink = `https://wa.me/${whatsapp}`;
    new QRCode(qrcodeContainer, {
      text: whatsappLink,
      width: 100,
      height: 100,
      colorDark: "#FFD700",
      colorLight: "#111111",
      correctLevel: QRCode.CorrectLevel.L,
    });
  } else {
    qrcodeContainer.innerHTML =
      "<small style='color: #888'>No WhatsApp</small>";
  }
});