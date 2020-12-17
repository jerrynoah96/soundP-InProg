import React, { Component } from "react";
import "../App.css";


class GetMeta extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, userAccount:null };

  render() {
    
    return (
      <div className="addTrack2GetMeta"> 
        <form className="getMetaForm">
          <h3>Get Meta with CID</h3>

            <input type="text" 
            placeholder="address 0x00...."
            className="metaInput"/>
            <input type="text" 
            placeholder="Input the CID you copied QmVbbYG......"
            className="metaInput"/>
            <button type="submit" className="submit4meta">Submit</button>

        </form>
      
        
      </div>
    );
  }
}

export default GetMeta;
