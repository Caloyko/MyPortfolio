import "./palette.css"

const Palette = () => {
  return (
      <div>
          <h1>Palette</h1>
          <div className="palette">
              <div className="colors">
                  <div className="color bg1">bg1</div>
                  <div className="color bg2">bg2</div>
                  <div className="color bg3">bg3</div>
                  <div className="color p1">p1</div>
                  <div className="color p2">p2</div>
                  <div className="color light">light</div>
                  <div className="color textc">text</div>
              </div>
          </div>
      </div>
  )
}

export default Palette