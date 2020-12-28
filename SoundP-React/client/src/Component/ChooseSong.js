import React, { Component } from "react";
import "../App.css";
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: "ipfs.infura.io", port: 5001, protocol:"https"})


class ChooseSong extends Component {
    state = {
        buffer: null,
        fileCID: null
    }

    captureFile = (e)=>{
        e.preventDefault();
        console.log('file catured')
        //process file for ipfs
        //first fetch file from event
        const userFile = e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(userFile);
        reader.onloadend = () => {
            this.setState({
                buffer: Buffer(reader.result)
            })
            console.log(this.state.buffer);
           
        }

    }
    //https://ipfs.infura.io/ipfs/QmVbbYGaCoJa4rMgw41GkGPXQa8184ioLwcipmvb2D926f
    //push file to ipfs using file buffer
    onSubmit = async (e)=> {
        e.preventDefault();
        console.log('submitting form')
        if(this.state.buffer){
            try{
                this.setState({
                    fileCID: 'Please wait for CID....This might take a minute or 2.Ensure to copy it'
                })

                const result = await ipfs.add(this.state.buffer)
                const fileCID = result.cid.string;
                console.log('result', result);
                this.setState({
                    fileCID
                })
            }
            catch(e){
                console.log('error', e)
            }
        
        } else{
            alert('choose a valid file');
        }

    }

    render(){

        return(
            <div className="main-page">
                <h4 className="brandDescription">Choose a Song</h4>
                {this.state.fileCID}
                <form className="upload-form" onSubmit={this.onSubmit}>
    
                    <input type="file" 
                    accept=".mp3" 
                    id="file" className="file-input" 
                    size="60"
                    onChange={this.captureFile}/>

                    <button><i class="material-icons">
                        cloud_upload
                    </i> &nbsp;Upload </button>
    
                   
    
                </form>
            </div>
        )

    }

   
}

export default ChooseSong;
