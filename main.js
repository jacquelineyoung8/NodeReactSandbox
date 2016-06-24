const React = require('react');
const ReactDOM = require('react-dom');
// const _ = require('lodash');

class Note extends React.Component {
  constructor(props){
    super(props);
    this.name = this.props.name;
    this.pic = `${this.name}.gif`;
    this.soundFile = new Audio(`Note_Sounds/${this.name}.wav`);

    // this.state = {value: this.props.value};
    this.play = this.play.bind(this);
  }
  play(event) {
    this.soundFile.play();
  }
  render() {
    return (
      	<img onClick={this.play} src={`Note_Pics/${this.pic}`} name={this.name}/>
    );
  }
}

var pianoStyle ={
	color: 'green',
	backgroundColor: "#800080",
};

class Piano extends React.Component {
   _getNotes(){

	   	const noteList = ["c1","c1Sharp","d1","d1Sharp","e1","f1","f1Sharp","g1","g1Sharp","a1","a1Sharp",
	    "b1","c2","c2Sharp","d2","d2Sharp","e2","f2","f2Sharp","g2","g2Sharp","a2","a2Sharp","b2"]

	    return noteList.map((noteName) => {
	    	return (
	    		<Note name={noteName} />
	    		);
	    });
   }
   
    render() {
        return(
            <div style={pianoStyle} className="NoteBox">
                <p className="header">
                    {this._getNotes()}
                </p>
            </div>);
    }

}
    

ReactDOM.render(
  <Piano />,
  document.getElementById('example')

);