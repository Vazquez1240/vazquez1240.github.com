import MenuItem from "./menu-item";

function Menu(props){
    return (
        <header className="App-header">
        <nav>
          <ul>
            <MenuItem
                text="Home"
                link = "#"
            />
            <MenuItem
                text="Personajes"
                link="#"/>
           <MenuItem
                text="Personajes"
                link="#"/>
            <MenuItem
                text="Citas"
                link="#"/>
          </ul>
        </nav>
      </header>
    )
}



export default Menu;