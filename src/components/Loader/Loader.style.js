import styled from 'styled-components';

export const Container = styled.div`
  width:30px;
	height:30px;
	border-radius:50%;
	position:relative;
	margin:0 auto;
	margin-top:150px;
	overflow:hidden;
	-webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    -o-animation:spin 2s linear infinite;
    -ms-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite;

    &:hover{
        -animation-play-state:paused;
	    webkit-animation-play-state:paused;
        -moz-animation-play-state:paused;
        -o-animation-play-state:paused;
        -ms-animation-play-state:paused;
    }

    @keyframes spin {
		0%{-webkit-transform:rotate(0deg);
            -moz-transform:rotate(0deg);
            -o-transform:rotate(0deg);
            -ms-transform:rotate(0deg);
            -transform:rotate(0deg);
        }
		100%{-webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            -transform:rotate(360deg);
        }
    }
`;

export const Inner = styled.div`
    width:100%;
    height:50%;
    position:absolute;
    margin-top:50%;
    background:linear-gradient(90deg,rgb(97, 74, 211),rgb(228, 44, 100));

    &:before{
		content:'';
		width:100%;
		height:100%;
		position:absolute;
		margin-top:-50%;
		background:linear-gradient(90deg,rgb(97, 74, 211),rgb(228, 44, 100));
    }
    
    &:after{
		content:'';
		width:60%;
		height:120%;
		position:absolute;
		margin-top:-30%;
    background-color: ${({color})=>color.main};
		margin-left:20%;
		border-radius:50%;
		}
`;