<template>
    <div>
        <f7-block>

            <f7-accordion v-for="(technique, index) in techniques" :key="technique.top">
                <f7-accordion-item>
                    <f7-accordion-toggle>
                        <f7-card>
                            <f7-card-header :style="{ 'background-color': bgColors[index % 7]}">{{ technique["top"] }}</f7-card-header>
                            <f7-card-content>{{ technique["top-expand"] }}</f7-card-content>
                        </f7-card>
                    </f7-accordion-toggle>
                    <f7-accordion-content>
                        <f7-list>
                            <f7-list-item :style="{ 'color': colors[index % 7]}" v-for="subTechnique, subIndex in technique['sub']" :key="subTechnique" :link="'/techniqueDetail/' + subTechnique + '/' + encodeURIComponent(JSON.stringify(technique.details[subIndex]))" :title="subTechnique">
                            </f7-list-item>
                        </f7-list>
                    </f7-accordion-content>
                </f7-accordion-item>
            </f7-accordion>
        </f7-block>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bgColors: [
                    "rgba(127, 191, 63, 0.6)",
                    "rgba(191, 63, 63, 0.6)",
                    "rgba(63, 127, 191, 0.6)",
                    "rgba(127, 63, 191, 0.6)",
                    "rgba(191, 127, 63, 0.6)",
                    "rgba(63, 191, 63, 0.6)",
                    "rgba(63, 63, 191, 0.6)",
                ],
                colors: [
                    "rgba(127, 191, 63, 1)",
                    "rgba(191, 63, 63, 1)",
                    "rgba(63, 127, 191, 1)",
                    "rgba(127, 63, 191, 1)",
                    "rgba(191, 127, 63, 1)",
                    "rgba(63, 191, 63, 1)",
                    "rgba(63, 63, 191, 1)",
                ],

                techniques: [{
                    "top": "Precommit",
                    "top-expand": "to yourself",
                    "sub": [
                        "Set high-level goals",
                        "Set boundaries",
                        "Understand others' starting point",
                        "The 4-hour work-week reality check"
                    ],
                    "details": [
                        {
                            "main": "Set your own broad objectives",
                            "explain": "Understand why you are initiating this Ask, giving yourself the broadest possible scope in outcomes you would find personally interesting.",
                            "process": {
                                "head": "",
                                "list": [
                                    "List the general outcomes you would find satisfying (creating a new product, establishing a new company, changing the world, being financially independent …)",
                                    "List the general outcomes that would not interest you (an offer of employment within an existing firm, not being able to pay the rent, …)"
                                ],
                                "foot": "This is not about transaction specific goals such as selling a particular product or raising a set amount of investment. This is about setting the criteria in advance for possibilities you will have to evaluate in the moment of the ask."
                            }
                        }, {
                            "main": "What is not negotiable in this process?",
                            "explain": "Before you start, be clear about what you are not going to do.",
                            "process": {
                                "head": "Make yourself a list of things that follow the words 'This effort will not…' Examples:",
                                "list": [
                                    "… deplete my retirement account.",
                                    "… screw up my marriage.",
                                    "… cause me to lie.",
                                    "… draw me away from my commitment to do something about global warming."
                                ],
                                "foot": "Be sure to be think broadly about compromises you might be willing to make, and those you are sure you would not."
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        }
                    ]
                }, {
                    "top": "Expand",
                    "top-expand": "the canvas of potential stakeholders",
                    "sub": [
                        "Start with an inventory",
                        "Link the canvas",
                        "Widen the net",
                        "Change roles",
                        "Make room for serendipity"
                    ],
                    "details": [
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        }
                    ]

                }, {
                    "top": "Prepare",
                    "top-expand": "to launch your ask",
                    "sub": [
                        "Tailor a narrative",
                        "Do a practice run",
                        "Make it affordable loss",
                        "Ask without the quid pro quo",
                        "Don't forget to ask"
                    ],
                    "details": [{
                        "main": "",
                        "explain": "",
                        "process": {
                            "head": "",
                            "list": [

                            ],
                            "foot": ""
                        }
                    },
                    {
                        "main": "",
                        "explain": "",
                        "process": {
                            "head": "",
                            "list": [

                            ],
                            "foot": ""
                        }
                    },
                    {
                        "main": "",
                        "explain": "",
                        "process": {
                            "head": "",
                            "list": [

                            ],
                            "foot": ""
                        }
                    },
                    {
                        "main": "",
                        "explain": "",
                        "process": {
                            "head": "",
                            "list": [

                            ],
                            "foot": ""
                        }
                    },
                    {
                        "main": "",
                        "explain": "",
                        "process": {
                            "head": "",
                            "list": [

                            ],
                            "foot": ""
                        }

                    }]
                }, {
                    "top": "Open",
                    "top-expand": "the dialog which is your ask",
                    "sub": [
                        "Start specific",
                        "Start broad",
                        "Build empathy",
                        "Build ownership"
                    ],
                    "details": [
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        }
                    ]
                }, {
                    "top": "Pivot",
                    "top-expand": "your ask to artfully match interests, means, and constraints",
                    "sub": [
                        "Permission to pester",
                        "Ask and dance",
                        "Active listening",
                        "Transform"
                    ],
                    "details": [
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        }
                    ]
                }, {
                    "top": "Commit",
                    "top-expand": "your ask into action",
                    "sub": [
                        "Skin in the game",
                        "Contingent commitment",
                        "Talk baseball",
                        "Exit with iteration"
                    ],
                    "details": [
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        },
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        }
                    ]
                }, {
                    "top": "Iterate",
                    "top-expand": "because asking is never done",
                    "sub": [
                        "Play a fair game"
                    ],
                    "details": [
                        {
                            "main": "",
                            "explain": "",
                            "process": {
                                "head": "",
                                "list": [

                                ],
                                "foot": ""
                            }
                        }
                    ]
                }]
            }
        }
    }

</script>

<style>
    .card-header {
        font-weight: bold;
        font-size: 1.4em;
    }

    .card-content {
        background-color: rgba(170, 160, 160, 0.1);
    }

    .list-block {
        /*background-color: rgba(170, 160, 160, 0.1);*/
        font-size: 1.3em;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
    }
</style>