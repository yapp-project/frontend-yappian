import React, {Component} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import './CompletePopup.css';

import addCoverImg from '../../img/add-cover-img.png'
import completeCheck from '../../img/complete-submit-check.png'


const formData = new FormData();
class CompletePopup extends Component {
    constructor(props){
        super(props);

        this.state = {
            urlInputCaution: true,
            imagePreviewUrl: '',
            imgFile: '',
            pdfFile: '',
            releaseCheck : 'Y',
            productURL : '',
            description : '',
            projectIdx : 1,
            files : [],
            redirect : false
        }

    }

    _handleImageChange= (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imgFile: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
        console.log(file)

    }


    handleUploadPdf = (e) => {
        console.log(e.target.files[0])
        this.setState({
            pdfFile : e.target.files[0]
        })
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
    }


    handleCompleteSubmit = () => {
        const {productURL, description, releaseCheck, projectIdx} = this.state;
        const formData = new FormData();
        formData.append('files', this.state.imgFile)
        formData.append('files', this.state.pdfFile)
        formData.append('description', description)
        formData.append('productURL', productURL)
        formData.append('releaseCheck', releaseCheck)


        axios.put(`http://localhost:8085/api/project/`+ projectIdx +`/finish`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*'
            }
        })
            .then(res => {
                console.log("성공")
                this.setState({
                    redirect : true
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render(){
        let {imagePreviewUrl, redirect} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="img-loaded"/>);
        }else {
            $imagePreview = (<img src={addCoverImg} className="img-add"/>);
        }

        if(redirect === true){
            return(
                <Redirect to={'#/main/' + this.state.projectIdx} />
            );
        }else{
            return (
                <div className="completeWrapper">
                    <form onSubmit={this.handleCompleteSubmit}>
                        <div className="topStyled"></div>
                        <div className="completeFrameCenter">
                            <div className="completeFrame">
                                <div className="completePopupTitle">프로젝트 완료하기</div>
                                <div className="completePopupInfo">YAPPIAN 여러분! 프로젝트 완료를 축하합니다.</div>
                                <div className="completePopupInputUrlBox">
                                    <input name="productURL" type="text" className="inputStyled" placeholder="프로젝트 URL (Product Url, 런칭 URL 연결 링크)" onChange={this.handleCompleteForm}/>
                                </div>
                                <div className="intro-img-wrapper">
                                    <div className="intro-wrapper">
                                        <div className="intro-title">프로젝트 소개</div>
                                        <textArea name="description" className="intro-textarea" placeholder="프로젝트에 대한 소개와 직군별 프로젝트 관리팁을 공유해주세요.(최소 30자)"  onChange={this.handleCompleteForm}></textArea>
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
                                                <input type="file" name="files" id="file1" onChange={this.handleUploadPdf} accept=".pdf"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="launching-wrapper">
                                        <div className="launching-title">런칭유무</div>
                                        <div className="launching-frame">
                                            <div className={this.state.releaseCheck === 'Y' ? 'active-button' : 'no-active-button'} onClick={this.handleLaunching}>
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
                                <button className="submit-button-complete" type="submit">
                                    <img src={completeCheck} className="complete-submit-check"/>
                                </button>
                            </div>
                        </div>
                        <input type="file" name="files" id="file0" className="img-in-complete" onChange={this._handleImageChange} accept=".jpg, .jpeg, .png"/>

                    </form>
                </div>
            );
        }


    }
}

export default CompletePopup;