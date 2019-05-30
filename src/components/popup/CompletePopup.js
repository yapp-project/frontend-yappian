import React, {Component} from 'react';
import { Checkbox } from 'semantic-ui-react'
import './CompletePopup.css';

import completeInputNo from '../../img/complete-input-.png'
import completeInputYes from '../../img/completeinputurlpupple.png'
import addCoverImg from '../../img/add-cover-img.png'
import completeCheck from '../../img/complete-submit-check.png'
import searchImg from '../../img/completeinputurlpupple.png'
import Project from "../project/ProjectList";


class CompletePopup extends Component {
    constructor(props){
        super(props);

        this.state = {
            urlInputCaution: true,
            imgFile: '',
            imagePreviewUrl: '',
            pdfFile: '',
            urlInput: ''
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
    }

    _handleUrlInput = (e) => {
        this.setState({
            urlInput : e.target.value
        })
    }

    handleUploadPdf = (e) => {
        console.log(e.target.files[0])
        this.setState({
            pdfFile : e.target.files[0]
        })
    }


    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="img-loaded"/>);
        }else {
            $imagePreview = (<img src={addCoverImg} className="img-add"/>);
        }


        return (
            <div className="completeWrapper">
                <form>
                    <div className="topStyled"></div>
                    <div className="completeFrame">
                        <div className="completePopupTitle">프로젝트 완료하기</div>
                        <div className="completePopupInfo">YAPPIAN 여러분! 프로젝트 완료를 축하합니다.</div>
                        <div className="completePopupInputUrlBox">
                            <input name="productURL" type="text" className="inputStyled" placeholder="프로젝트 URL" onChange={this._handleUrlInput}/>
                        </div>
                        <div className="intro-img-wrapper">
                            <div className="intro-wrapper">
                                <div className="intro-title">프로젝트 소개</div>
                                <textArea name="description" className="intro-textarea" placeholder="프로젝트에 대한 소개와 직군별 프로젝트 관리팁을 공유해주세요.(최소 30자)"></textArea>
                            </div>
                            <div className="img-wrapper">
                                <div className="img-title">커버 이미지</div>
                                <label htmlFor="img-in-complete" className="img-add-wrapper">
                                    {$imagePreview}
                                </label>
                            </div>
                        </div>
                        <div className="portfo-launching-wrapper">
                            <div className="portfo-wrapper">
                                <div className="portfo-title">포트폴리오</div>
                                <div className="portfo-input-file-wrapper">
                                    <div className="portfo-input-file">
                                        <input type="file" onChange={this.handleUploadPdf} accept=".pdf"/>
                                    </div>
                                </div>
                            </div>
                            <div className="launching-wrapper">
                                <div className="launching-title">런칭유무</div>
                                <div className="launching-frame"></div>
                            </div>
                        </div>
                        <button type="submit" className="submit-button-complete">
                            <img src={completeCheck} className="complete-submit-check"/>
                        </button>
                    </div>
                    <input type="hidden" name="projectIdx" />
                    <input type="file" id="img-in-complete" className="img-in-complete" onChange={this._handleImageChange} accept=".jpg, .jpeg, .png"/>
                </form>
            </div>
        );
    }
}

export default CompletePopup;