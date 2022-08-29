/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Implementation of Laplacian Differential Privacy with varying epsilon",
    authors:
      "Jibran Mohammad, Farida Khursheed",
    conferences:
      "",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/noisy.png",
    citation: {
      vancouver:
        "https://www.academia.edu/s/ffb5c0ccf5?source=link",
    },
    abstract:
      "Significant advances in computing technology are bringing many benefits to societies, with changes and financial opportunities created in health care, transportation, education, law enforcement, security, commerce, and social interactions.Today its a known fact that data is everywhere. The world has become information centric,and it is not a surprise, especially in this time when data storage is cheap and accessible. Various areas of human endeavour use this data to conduct research, track the behavior of users, recommend products or evaluate national security risks and many more.Many of these benefits, however, involve the use of sensitive data, and thus raise concerns about privacy. Methods that allow the extraction of knowledge from data, while preserving privacy of users, are known as privacy-preserving data mining (PPDM) techniques.Differential privacy is the one the best privacy preserving data mining technique.I have implemented one of the mechanism of differential privacy called the laplacian differential privacy and verified the claims made by differential privacy that smaller the value of epsilon, better is the privacy.",
    absbox: "absPopup1",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);