import React from "react";

//

import { MiniInfoBox, MiniInfoBoxOne, MiniInfoBoxTwo, MicroInfoBox, MiniIconBox, IconTMDB, IconVNW, Text, WebButton, WebLink, MiniButtonBox } from "../Styles/InfoApp.js";
import { TmdbIcon, VNWIcon } from "../Assets";

//

export default class InfoApp extends React.Component {
    render() {
        return (
            <MiniInfoBox>

                <MiniInfoBoxOne>

                    <MiniIconBox>

                        <IconTMDB src={TmdbIcon} />

                    </MiniIconBox>

                    <MicroInfoBox>

                        <Text>
                            O TMDB é um site com um catalogo de mídias, sendo 
                            elas filmes e séries. Além disso, disponibiliza
                            uma API para que nós, desenvolvedores possamos
                            construir nossas aplicações consumindo os dados
                            que eles tem.
                        </Text>

                        <MiniButtonBox>

                            <WebLink href="https://www.themoviedb.org/">
                                <WebButton>
                                    Acessar
                                </WebButton>
                            </WebLink>

                        </MiniButtonBox>

                    </MicroInfoBox>

                </MiniInfoBoxOne>

                <MiniInfoBoxTwo>

                    <MiniIconBox>

                        <IconVNW src={VNWIcon} />

                    </MiniIconBox>

                    <MicroInfoBox>

                        <Text>
                            O VNW é um instituição educacional de tecnologia. 
                            Aqui tenho aprendido os fundamentos do desenvolvimento
                            web, seguido do estudo de JavaScript, utilizando uma lib
                            FrontEnd, sendo ela React.
                        </Text>

                        <MiniButtonBox>

                            <WebLink href="https://www.vainaweb.com.br/">
                                <WebButton>
                                    Acessar
                                </WebButton>
                            </WebLink>

                        </MiniButtonBox>

                    </MicroInfoBox>

                </MiniInfoBoxTwo>

            </MiniInfoBox>
        );
    }
}
