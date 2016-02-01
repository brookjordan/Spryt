const sprytSheets = {
  init: initialiseSpryteSheetDrawer,
};

export default sprytSheets;

function initialiseSpryteSheetDrawer(drawerClass) {
  const drawer_elt = document.querySelector(`.${drawerClass}`);
  const toggle_elt = document.createElement('button');

  toggle_elt.className = `${drawerClass}__toggle`;
  toggle_elt.addEventListener('click', toggleDrawer);

  drawer_elt.appendChild(toggle_elt);


  return {
    toggle: toggleDrawer,

    elt:    drawer_elt,
    button: toggle_elt,
  };


  function toggleDrawer() {
    drawer_elt.classList.toggle(`${drawerClass}--open`);
  }
}
