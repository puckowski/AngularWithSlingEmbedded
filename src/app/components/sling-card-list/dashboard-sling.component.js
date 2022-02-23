import { detectChanges, markup, textNode } from '../../../../node_modules/slingjs/sling.min';

class DashboardSlingComponent {

    constructor() {
        this.cardMetadataList = [
            { title: 'Hello', likeCount: 0 },
            { title: 'Hola', likeCount: 0 },
            { title: 'Bonjour', likeCount: 0 },
            { title: 'Salve', likeCount: 0 },
            { title: 'Guten Tag', likeCount: 0 },
            { title: 'Konnichiwa', likeCount: 0 }
        ];
        this.windowWidthSmall = false;

        this.WINDOW_WIDTH_SMALL_PIXELS = 540;
        this.DEFAULT_CARD_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    }

    slOnInit() {
        window.addEventListener('resize', this.determineIfWindowWidthSmall.bind(this), true);
    }

    slAfterInit() {
        this.determineIfWindowWidthSmall();
    }

    slOnDestroy() {
        console.log('Destroy DashboardSlingComponent');
    }

    determineIfWindowWidthSmall() {
        const originalState = this.windowWidthSmall;

        if (window.outerWidth < this.WINDOW_WIDTH_SMALL_PIXELS) {
            this.windowWidthSmall = true;
        } else {
            this.windowWidthSmall = false;
        }

        if (originalState !== this.windowWidthSmall) {
            detectChanges('root-slingjs');
        }
    }

    incrementLikesForCard(cardMetadata) {
        cardMetadata.likeCount++;
    }

    view() {
        return markup('div', {
            attrs: {
                id: 'root-slingjs'
            },
            children: [
                markup('div', {
                    attrs: {
                        'class': 'flex-container wrap'
                    },
                    children: [
                        ...Array.from(this.cardMetadataList, (cardMetadata, index) =>
                            markup('div', {
                                attrs: {
                                    'style': 'margin: 1rem; padding: 1rem; box-shadow: 2px 2px 4px 2px #C7C7C7;',
                                    ...this.windowWidthSmall === true && { 'class': 'flex-item-narrow' },
                                    ...this.windowWidthSmall === false && { 'class': 'flex-item' }
                                },
                                children: [
                                    markup('h2', {
                                        attrs: {

                                        },
                                        children: [
                                            textNode(cardMetadata.title)
                                        ]
                                    }),
                                    markup('img', {
                                        attrs: {
                                            'src': '../../../assets/images/' + (index + 1) + '.jpg',
                                            'style': 'width: 100%'
                                        }
                                    }),
                                    markup('p', {
                                        attrs: {
                                        },
                                        children: [
                                            textNode(this.DEFAULT_CARD_TEXT)
                                        ]
                                    }),
                                    markup('div', {
                                        attrs: {

                                        },
                                        children: [
                                            markup('button', {
                                                attrs: {
                                                    onclick: this.incrementLikesForCard.bind(this, cardMetadata)
                                                },
                                                children: [
                                                    textNode('LIKE')
                                                ]
                                            }),
                                            markup('span', {
                                                attrs: {
                                                    'style': 'vertical-align: middle; margin-left: 0.5rem;'
                                                },
                                                children: [
                                                    textNode('Likes ' + cardMetadata.likeCount)
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        )
                    ]
                })
            ]
        });
    }
}

export default DashboardSlingComponent;
