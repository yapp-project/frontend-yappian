import React, {Component} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import './CompletePopup.css';

import addCoverImg from '../../img/add-cover-img.png'
import completeCheck from '../../img/complete-submit-check.png'
import closeIcon from "../../img/noun-x-1890803@3x.png";
import Modal from "react-modal";

const completePopupBackground = {
    overlay : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    }
}



class CompletePopup extends Component {
    constructor(props){
        super(props);

        this.state = {
            urlInputCaution: true,
            imagePreviewUrl: '',
            imgFile: '',
            releaseCheck : 'Y',
            productURL : '',
            description : '',
            projectIdx : this.props.projectIdx,
            files : [],
            fileIdxList : [],
            completePopup : this.props.completePopup,
            redirect : false
        }
    }

    componentDidMount() {
        this.setState({
            completePopup : this.props.completePopup,
            projectIdx : this.props.projectIdx
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            completePopup : nextProps.completePopup,
            projectIdx : nextProps.projectIdx
        })
        //
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    _handleImageChange= (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imgFile : file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
        // console.log(file)

        this.fileSubmit(file)

    }


    handleUploadPdf = (e) => {
        // console.log(e.target.files[0])

        this.fileSubmit(e.target.files[0])
    }


    handleCompleteForm = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
         console.log(e.target.value)
    }


    handleLaunching = () => {
        if(this.state.releaseCheck === 'Y'){
            this.setState({
                releaseCheck : 'N'
            })

        }else {
            this.setState({
                releaseCheck : 'Y'
            })
        }

        // console.log(this.state.releaseCheck)
    }

    fileSubmit = (data) => {
        const formdata = new FormData();
        formdata.append("file", data)

        axios.post(`https://yappian.com/api/file/` + this.state.projectIdx,
            formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*'
                }
            }
        )
            .then(res => {
                this.setState({
                    fileIdxList : this.state.fileIdxList.concat(res.data.fileIdx)
                })

            })
            .catch(error => {
                console.log(error);
            })
    }

    redirectToUrl = () => {
        this.props.redirectToUrl();
    }


    handleCompleteSubmit = () => {
        const {productURL, description, releaseCheck, projectIdx, fileIdxList} = this.state;

        if(fileIdxList.length == 2){
                axios.post(`https://yappian.com/api/project/`+ projectIdx +`/finish`, {
                    "description": description,
                    "fileIdxList": fileIdxList,
                    "productURL": productURL,
                    "releaseCheck": releaseCheck
                })
                    .then(res => {
                        //console.log(JSON.stringify(res.data));
                        //alert(JSON.stringify(res.data));
                        this.closeCompletePopup()
                        this.redirectToUrl(this.state.projectIdx)
                        //window.location = 'https://yappian.com/#/main/'+ projectIdx
                    })
                    .catch(error => {
                        console.log(error)
                        alert("입력폼을 확인해주세요.")
                        //this.openCompletePopup()
                        //alert("1 : "+error)
                    })

        }else{
            //this.openCompletePopup()
            alert("입력폼을 채워주세요.")
        }


    }

    openCompletePopup = () => {
        this.props.openCompletePopup();
    }

    closeCompletePopup = () => {
        this.props.closeCompletePopup();
    }

    redirectToUrl = (idx) => {
        this.props.redirectToUrl(idx)
    }



    render(){
        let {imagePreviewUrl, projectIdx, completePopup} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="img-loaded"/>);
        }else {
            $imagePreview = (<img src={addCoverImg} className="img-add"/>);
        }

        // if(this.state.redirect === true){
        //     return(
        //         <Redirect to={"main/"+ projectIdx}/>
        //     );
        // }

        return(

            <Modal
                isOpen={completePopup}
                onRequestClose={this.closeCompletePopup}
                className="completeMainFrame" style={completePopupBackground}
            >
                {/*<form onSubmit={this.handleCompleteSubmit}>*/}
                    <div className="completeHeader">
                        <img src={closeIcon} className="styledCloseIcon"  onClick={this.closeCompletePopup}/>
                    </div>
                    <div className="completeFrame">
                        <div className="completePopupTitle">프로젝트 완료하기</div>
                        <div className="completePopupInfo">YAPPIAN 여러분! 프로젝트 완료를 축하합니다.</div>
                        <div className="completePopupInputUrlBox">
                            <input name="productURL" type="text" className="inputStyled"
                                   placeholder='프로젝트 URL (Product Url, 런칭 URL 연결 링크)'
                                   onChange={this.handleCompleteForm} />
                        </div>
                        <div className="intro-img-wrapper">
                            <div className="intro-wrapper">
                                <div className="intro-title">프로젝트 소개</div>
                                <textarea name="description" className="intro-textarea"
                                          placeholder="프로젝트에 대한 소개와 직군별 프로젝트 관리팁을 공유해주세요.(최소 10자)"
                                          onChange={this.handleCompleteForm} value={this.state.description}></textarea>
                            </div>
                            <div className="img-wrapper">
                                <div className="img-title">커버 이미지</div>
                                <label htmlFor="file0" className="img-add-wrapper">
                                    {$imagePreview}
                                </label>
                            </div>
                        </div>
                        <div className="portfo-launching-wrapper">
                            <div className="portfo-wrapper">
                                <div className="portfo-title">포트폴리오</div>
                                <div className="portfo-input-file-wrapper">
                                    <div className="portfo-input-file">
                                        <input type="file" name="files"
                                               onChange={this.handleUploadPdf} accept=".pdf"/>
                                    </div>
                                </div>
                            </div>
                            <div className="launching-wrapper">
                                <div className="launching-title">런칭유무</div>
                                <div className="launching-frame">
                                    <div
                                        className={this.state.releaseCheck === 'Y' ? 'active-button' : 'no-active-button'}
                                        onClick={this.handleLaunching}>
                                        <div>
                                            {
                                                this.state.releaseCheck === 'Y'
                                                    ? '예' : '아니오'
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="submit-button-complete" onClick={this.handleCompleteSubmit}>
                            <img src={completeCheck} className="complete-submit-check"/>
                        </button>
                    </div>
                    <input type="file" name="files" id="file0" className="img-in-complete" onChange={this._handleImageChange} accept=".jpg, .jpeg, .png"/>

                {/*</form>*/}
            </Modal>
        );
    }



}


export default CompletePopup;