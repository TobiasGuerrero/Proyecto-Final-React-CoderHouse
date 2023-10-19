import "./loadingScreen.css"

const loadingScreen = () => {
    return (
        <div className="containerLoading">
            <div className="loading"></div>
            <div className="loadingText">Cargando...</div>
        </div>
    )
}

export default loadingScreen;