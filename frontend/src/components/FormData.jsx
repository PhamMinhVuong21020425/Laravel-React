const FormData = () => {
  return (
    <div>
      <h1>Biểu mẫu đăng ký</h1>
      <form action="/submit" method="post">
        <label htmlFor="name">Tên:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <label htmlFor="gender">Giới tính:</label>
        <input type="radio" id="male" name="gender" value="male" /> Nam
        <input type="radio" id="female" name="gender" value="female" /> Nữ
        <br />
        <label htmlFor="country">Quốc gia:</label>
        <select id="country" name="country">
          <option value="vn">Việt Nam</option>
          <option value="us">United States</option>
          <option value="jp">Japan</option>
        </select>
        <br />
        <fieldset>
          <legend>Personalia:</legend>
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" require />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" value="Doe" />
          <br />
          <br />
          <button type="submit" value="Submit">Submit Form</button>
        </fieldset>
        <label htmlFor="message">Thông điệp:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
        <br />
        <button type="submit">Gửi</button>
        <button type="reset">Xóa</button>
      </form>
    </div>
  );
};

export default FormData;
