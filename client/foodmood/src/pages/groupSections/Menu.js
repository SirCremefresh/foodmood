import React from 'react';

import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';

import GroupInformationStore from "../../stores/GroupInformationStore";

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

const tabStyle = {
  backgroundColor: "#287eff",
};

var Menu = React.createClass({
  getInitialState: function() {
    return {
      value: this.getDay(),
      menuplan: {},
    };
  },

  componentWillMount() {
    GroupInformationStore.on("newMenuplan", this.setMenuPlan);
  },

  componentDidMount: function() {
    this.setMenuPlan();
  },

  componentWillUnmount() {
    GroupInformationStore.removeListener("newMenuplan", this.setMenuPlan);
  },

  setMenuPlan() {
    if (GroupInformationStore.isMenuplanLoaded(this.props.groupID)) {
      this.setState({
        menuplan: GroupInformationStore.getMenuplan(this.props.groupID),
      });
    }
  },

  getDay() {
    var d = new Date();
    var day = d.getDay();
    switch (day) {
      case 0:
        return "so";
      case 1:
        return "mo";
      case 2:
        return "di";
      case 3:
        return "mi";
      case 4:
        return "do";
      case 5:
        return "fr";
      case 6:
        return "sa";
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
    var loaded = false;
    if (this.state.menuplan != {}) {
      loaded = true
    }

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
               icon={<img src="../icons/mo-icon.svg" width="30px" role="presentation"></img>}
               label={loaded ? this.state.menuplan.MontagT : ""}
               style={tabStyle}
             >
               <div>
                 <h2 style={menuStyle.headline}>{loaded ? this.state.menuplan.MontagT : ""}</h2>
                 <p>
                   {loaded ? this.state.menuplan.MontagD : ""}
                 </p>
               </div>
             </Tab>
             <Tab
               value="di"
               icon={<img src="../icons/di-icon.svg" width="30px" role="presentation"></img>}
               label={loaded ? this.state.menuplan.DienstagT : ""}
               style={tabStyle}
             >
               <div>
                 <h2 style={menuStyle.headline}>{loaded ? this.state.menuplan.DienstagT : ""}</h2>
                 <p>
                   {loaded ? this.state.menuplan.DienstagD : ""}
                 </p>
               </div>
             </Tab>
             <Tab
               value="mi"
               icon={<img src="../icons/mi-icon.svg" width="30px" role="presentation"></img>}
               label={loaded ? this.state.menuplan.MitwochT : ""}
               style={tabStyle}
             >
               <div>
                 <h2 style={menuStyle.headline}>{loaded ? this.state.menuplan.MitwochT : ""}</h2>
                 <p>
                   {loaded ? this.state.menuplan.MitwochD : ""}
                 </p>
               </div>
             </Tab>
             <Tab
               value="do"
               icon={<img src="../icons/do-icon.svg" width="30px" role="presentation"></img>}
               label={loaded ? this.state.menuplan.DonnerstagT : ""}
               style={tabStyle}
             >
               <div>
                 <h2 style={menuStyle.headline}>{loaded ? this.state.menuplan.DonnerstagT : ""}</h2>
                 <p>
                   {loaded ? this.state.menuplan.DonnerstagD : ""}
                 </p>
               </div>
             </Tab>
             <Tab
               value="fr"
               icon={<img src="../icons/fr-icon.svg" width="30px" role="presentation"></img>}
               label={loaded ? this.state.menuplan.FreitagT : ""}
               style={tabStyle}
             >
               <div>
                 <h2 style={menuStyle.headline}>{loaded ? this.state.menuplan.FreitagT : ""}</h2>
                 <p>
                   {loaded ? this.state.menuplan.FreitagD : ""}
                 </p>
               </div>
             </Tab>
             <Tab
               value="sa"
               icon={<img src="../icons/sa-icon.svg" width="30px" role="presentation"></img>}
               label={loaded ? this.state.menuplan.SamstagT : ""}
               style={tabStyle}
             >
               <div>
                 <h2 style={menuStyle.headline}>{loaded ? this.state.menuplan.SamstagT : ""}</h2>
                 <p>
                   {loaded ? this.state.menuplan.SamstagD : ""}
                 </p>
               </div>
             </Tab>
             <Tab
               value="so"
               icon={<img src="../icons/so-icon.svg" width="30px" role="presentation"></img>}
               label={loaded ? this.state.menuplan.SonntagT : ""}
               style={tabStyle}
             >
               <div>
                 <h2 style={menuStyle.headline}>{loaded ? this.state.menuplan.SonntagT : ""}</h2>
                 <p>
                   {loaded ? this.state.menuplan.SonntagD : ""}
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
