'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-task-manager documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' : 'data-target="#xs-controllers-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' :
                                            'id="xs-controllers-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' : 'data-target="#xs-injectables-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' :
                                        'id="xs-injectables-links-module-AuthModule-0f7a82b9c0340b8c4b1aed2e4e5efbd4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JWTStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JWTStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphqlModule.html" data-type="entity-link">GraphqlModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModelsModule.html" data-type="entity-link">ModelsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link">TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' : 'data-target="#xs-controllers-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' :
                                            'id="xs-controllers-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' }>
                                            <li class="link">
                                                <a href="controllers/TasksController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' : 'data-target="#xs-injectables-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' :
                                        'id="xs-injectables-links-module-TasksModule-1628b98cce8bf88895b69c47fd6db1ee"' }>
                                        <li class="link">
                                            <a href="injectables/TasksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TasksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link">TasksModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TasksModule-9f2c923a90a9af0aebbf33238f7331a5-1"' : 'data-target="#xs-injectables-links-module-TasksModule-9f2c923a90a9af0aebbf33238f7331a5-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-9f2c923a90a9af0aebbf33238f7331a5-1"' :
                                        'id="xs-injectables-links-module-TasksModule-9f2c923a90a9af0aebbf33238f7331a5-1"' }>
                                        <li class="link">
                                            <a href="injectables/TasksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TasksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateTaskArgsDto.html" data-type="entity-link">CreateTaskArgsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link">CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTaskByIdDto.html" data-type="entity-link">GetTaskByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTasksFilterDto.html" data-type="entity-link">GetTasksFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpCredentialsDto.html" data-type="entity-link">SignUpCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskEntity.html" data-type="entity-link">TaskEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskRepository.html" data-type="entity-link">TaskRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TasksResolver.html" data-type="entity-link">TasksResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskStatusValidationPipe.html" data-type="entity-link">TaskStatusValidationPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskArgsDto.html" data-type="entity-link">UpdateTaskArgsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link">UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link">UserRepository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JWTPayload.html" data-type="entity-link">JWTPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JWTResponse.html" data-type="entity-link">JWTResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});