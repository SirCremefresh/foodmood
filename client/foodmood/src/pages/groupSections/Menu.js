import React from 'react';

import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';

const titleDividerStyle = {
  height: 3,
};

const menuStyle = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

var Menu = React.createClass({
  getInitialState: function() {
    return {
      value : this.getDay(),
    };
  },

  getDay() {
    var d = new Date();
    var day = d.getDay();
    switch (day) {
      case 0:
        return "so";
        break;
      case 1:
        return "mo";
        break;
      case 2:
        return "di";
        break;
      case 3:
        return "mi";
        break;
      case 4:
        return "do";
        break;
      case 5:
        return "fr";
        break;
      case 6:
        return "sa";
        break;
      default:
        return "mo";
    }
  },

  handleChange(value) {
    this.setState({
      value: value,
    });
  },

  render() {
    return (
      <div>
        <header>
          <h1 className="contentTitle">Menüplan</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>

          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
             <Tab
               value="mo"
               icon={<img src="./icons/mo-icon.svg" width="30px"></img>}
               label="Lasagne"
             >
               <div>
                 <h2 style={menuStyle.headline}>Controllable Tab A</h2>
                 <p>
                   Tabs are also controllable if you want to programmatically pass them their values.
                   This allows for more functionality in Tabs such as not
                   having any Tab selected or assigning them different values.
                 </p>
               </div>
             </Tab>
             <Tab
               value="di"
               icon={<img src="./icons/di-icon.svg" width="30px"></img>}
               label="Burger"
             >
               <div>
                 <h2 style={menuStyle.headline}>sdf Tab A</h2>
                 <p>
                   Tabs are also controllable if you want to programmatically pass them their values.
                   This allows for more functionality in Tabs such as not
                   having any Tab selected or assigning them different values.
                 </p>
               </div>
             </Tab>
             <Tab
               value="mi"
               icon={<img src="./icons/mi-icon.svg" width="30px"></img>}
               label="Suppe"
             >
               <div>
                 <h2 style={menuStyle.headline}>Controllable Tab A</h2>
                 <p>
                   Tabs are also controllable if you want to programmatically pass them their values.
                   This allows for more functionality in Tabs such as not
                   having any Tab selected or assigning them different values.
                 </p>
               </div>
             </Tab>
             <Tab
               value="do"
               icon={<img src="./icons/do-icon.svg" width="30px"></img>}
               label="Kuchen"
             >
               <div>
                 <h2 style={menuStyle.headline}>Controllable Tab A</h2>
                 <p>
                   Tabs are also controllable if you want to programmatically pass them their values.
                   This allows for more functionality in Tabs such as not
                   having any Tab selected or assigning them different values.
                 </p>
               </div>
             </Tab>
             <Tab
               value="fr"
               icon={<img src="./icons/fr-icon.svg" width="30px"></img>}
               label="Chicken Nuggets"
             >
               <div>
                 <h2 style={menuStyle.headline}>Controllable Tab A</h2>
                 <p>
                   Tabs are also controllable if you want to programmatically pass them their values.
                   This allows for more functionality in Tabs such as not
                   having any Tab selected or assigning them different values.
                 </p>
               </div>
             </Tab>
             <Tab
               value="sa"
               icon={<img src="./icons/sa-icon.svg" width="30px"></img>}
               label="Fischstäbchen"
             >
               <div>
                 <h2 style={menuStyle.headline}>Controllable Tab A</h2>
                 <p>
                   Tabs are also controllable if you want to programmatically pass them their values.
                   This allows for more functionality in Tabs such as not
                   having any Tab selected or assigning them different values.
                 </p>
               </div>
             </Tab>
             <Tab
               value="so"
               icon={<img src="./icons/so-icon.svg" width="30px"></img>}
               label="Lasagne"
             >
               <div>
                 <h2 style={menuStyle.headline}>Controllable Tab A</h2>
                 <p>
                   Tabs are also controllable if you want to programmatically pass them their values.
                   This allows for more functionality in Tabs such as not
                   having any Tab selected or assigning them different values.
                 </p>
               </div>
             </Tab>
           </Tabs>
        </div>
      </div>
    );
  }
});

module.exports = Menu;
