<template>
	<div v-html="htmlContent"></div>
</template>

<script>
import * as quark from 'quark-gui';

export default {
    name: 'MainNavigation',
    data () {
        return {
            htmlContent: "",
            header: {}
        }
    },
    created: function () {
        let header = {
            id: 'main-header',
            theme: 'primary',
            logo: {
                image: {
                    src: '/src/img/svg/quark-GUI-logo-white.svg',
                    alt: 'app logo'
                },
                url: "/"
            },
            primaryNavigationLeft: {
                listItems: [
                {
                    name: "Link",
                    link: "#"
                }, 
                {
                    name: "Dropdown",
                    link: "#",
                    dropdownContent: {
                        listItems: [
                        {
                            name: "Buttons",
                            link: "#buttons"
                        },
                        {
                            name: "Form elements",
                            link: "#form-elements"
                        }, 
                        {
                            name: "Lists",
                            link: "#lists"
                        }, {
                            name: "Cards",
                            link: "#cards"
                        }
                        ]
                    }

                }
                ]
            },
            sidebar: {
                sidebarNavigation: {
                    listItems: [
                    {
                        name: "Buttons",
                        link: "#buttons"
                    },
                    {
                        name: "Form elements",
                        link: "#form-elements"
                    }, 
                    {
                        name: "Lists",
                        link: "#lists"
                    }, {
                        name: "Cards",
                        link: "#cards"
                    }
                    ]
                }
            }
        };
        this.header = header;
        this.htmlContent = quark.Organisms.Global.Header.getModule(this.header);
    }
}
</script>
