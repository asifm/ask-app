import { uniqueId } from 'lodash';

export default {
    data() {
        return {
            colors: {
                "bgColors": [
                    "rgba(191, 63, 63, 0.4)",
                    "rgba(127, 191, 63, 0.4)",
                    "rgba(63, 127, 191, 0.4)",
                    "rgba(127, 63, 191, 0.4)",
                    "rgba(191, 127, 63, 0.4)",
                    "rgba(63, 191, 63, 0.4)",
                    "rgba(63, 63, 191, 0.4)"
                ],
                "fgColors": [
                    "rgba(191, 63, 63, 1)",
                    "rgba(127, 191, 63, 1)",
                    "rgba(63, 127, 191, 1)",
                    "rgba(127, 63, 191, 1)",
                    "rgba(191, 127, 63, 1)",
                    "rgba(63, 191, 63, 1)",
                    "rgba(63, 63, 191, 1)"
                ],
                "themes": [
                    "theme-purple",
                    "theme-deeppurple",
                    "theme-indigo",
                    "theme-blue",
                    "theme-green",
                    "theme-lightgreen"
                ]
            }
        };
    },
    created() {

    },
    methods: {
        uniqueId: uniqueId
    }
}