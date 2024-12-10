
function Intro() {

    const slide = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        paddingLeft: '2em',
        paddingRight: '2em',
        backgroundColor: '#d4e09b',
    };

// need to add a project description or explanation
    return  (
      <div style={slide}>
        <h1>Completed Reads</h1>
      </div>
    );
}

export default Intro;