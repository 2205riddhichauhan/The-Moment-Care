const Footbar = () => {
  return (
    <footer className="footer" style={{"backgroundColor":"#C0C0C0" }} >
      <p className="text-center text-black ">
      💖 Empowering Mothers, Nurturing Futures — <span style={{ color: "#d36b9a" }}><strong>The MOMent Care</strong></span></p>
      <p style={{ fontSize: "0.9rem", color: "#333" }}>
          © {new Date().getFullYear()} The MOMent Care. All rights reserved.
        </p>
        
    </footer>
  )
}

export default Footbar;