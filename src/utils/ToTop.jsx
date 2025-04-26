function ToTop() {
  return (
    <>
      <a
        href="https://wa.me/9835131321?text=Hello"
        className="btn whatsapp-icon"
      >
        <img
          src="./img/whatsapp.webp"
          alt="WhatsApp"
          height={60}
          className="vibrate"
        />
      </a>

      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
}

export default ToTop;
