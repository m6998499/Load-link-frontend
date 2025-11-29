export default function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" /><br/><br/>
        <input type="password" placeholder="Password" /><br/><br/>
        <button>Log In</button>
      </form>
    </div>
  );
}
