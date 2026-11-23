// ==========================================
// File: bai19.js - Xử lý tương tác Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  // 1. Cuộn mượt khi click các liên kết điều hướng menu
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 2. Hiệu ứng phóng to / xem ảnh khi click vào ảnh trong bộ sưu tập
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.title = "Nhấp để xem ảnh lớn";
    img.addEventListener("click", function () {
      const w = window.open("");
      w.document.write(`
        <!DOCTYPE html>
        <html>
          <head><title>${this.alt || "Xem ảnh"}</title></head>
          <body style="margin:0;background:#111;display:flex;justify-content:center;align-items:center;min-height:100vh;">
            <img src="${this.src}" style="max-width:90%;max-height:90vh;border-radius:8px;box-shadow:0 0 20px rgba(255,255,255,0.2);">
          </body>
        </html>
      `);
    });
  });

  // 3. Thông báo trang đã sẵn sàng
  console.log("Trang Portfolio đã được tải đầy đủ cùng file JS và CSS riêng biệt!");
});