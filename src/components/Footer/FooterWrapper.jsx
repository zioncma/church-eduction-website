const style = {
    // borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    // height: blockHeight,
    width: "100%",
    backgroundColor: '#1b2024',
    padding: '1rem',
    color: 'rgb(192 192 192)',
    font: "300 0.9rem 'Lora', serif",
}

const phantom = {
  display: 'block',
  padding: '20px',
//   height: blockHeight,
  width: '100%',
}

function FooterWrapper({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default FooterWrapper