export const _all_characters = [
    {
        "id": 11,
        "image": "RKayamoriIcon.webp",
        "w_image": "RKayamoriProfile.webp",
        "label": "RKayamori",
        "name": "茅森 月歌 — Ruka Kayamori — ",
        "ruby": "かやもり るか",
        "team": "31A",
        "profile": {
            "cv": "楠木ともり",
            "vo": "XAI",
            "bd": "6月24日",
            "bp": "神奈川",
            "hg": "159cm",
            "sc": "『あたしの伝説はこれから始まる』",
            "desc": "伝説的ロックバンド『She is Legend』の元ギター＆ボーカル。\n作詞作曲もこなし、メジャーデビューアルバムはその年の新人賞を総なめ。天才という言葉をほしいままにした。\nひたすら音楽が好きで、31Aの六人で新生『She is Legend』を結成してしまう。\n脳天気で、仲間思いで、時たま根性を見せる。"
        },
        "cards": [
            {
                "id": 1001101,
                "image": "RKayamoriDefault_R1_Thumbnail.webp",
                "label": "RKayamori01",
                "name": "Attack or Music",
                "role": "Attacker",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46001102,
                        "l": "RKayamoriSkill01",
                        "n": "クロス斬り",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001102,
                "image": "RKayamoriDefault_R2_Thumbnail.webp",
                "label": "RKayamori02",
                "name": "戦場のフレット",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001105,
                        "l": "RKayamoriSkill04",
                        "n": "フルブレイカー",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001103,
                "image": "RKayamoriDefault_R3_Thumbnail.webp",
                "label": "RKayamori03",
                "name": "閃光のサーキットバースト",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 25,
                    "wis": 15,
                    "dex": 15,
                    "spr": 20,
                    "luk": 30,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001104,
                        "l": "RKayamoriSkill03",
                        "n": "リカバー",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ]
                        ]
                    },
                    {
                        "i": 46001106,
                        "l": "RKayamoriSkill51",
                        "n": "夢幻泡影",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 1,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001104,
                "image": "RKayamoriDefault_R3a_Thumbnail.webp",
                "label": "RKayamori04",
                "name": "黎明のエモーショナル・ソウル",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001103,
                        "l": "RKayamoriSkill02",
                        "n": "スピニングスラッシュ",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001107,
                        "l": "RKayamoriSkill52",
                        "n": "星火燎原",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001161,
                        "l": "RKayamoriSkill52Ev1",
                        "n": "星火燎原+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001016,
                        "l": "Passive.Turn_AttackUpAll01",
                        "n": "[Auto] 英雄の凱歌",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001105,
                "image": "RKayamoriGothic_R3_Thumbnail.webp",
                "label": "RKayamori05",
                "name": "残響のカルディナル",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001108,
                        "l": "RKayamoriSkill05",
                        "n": "ノーブルウェッジ",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001109,
                        "l": "RKayamoriSkill53",
                        "n": "千紫万紅",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001035,
                        "l": "Passive.Turn_CriticalRateUp01",
                        "n": "[Auto] 星空",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001106,
                "image": "RKayamoriSwim2022_R2_Thumbnail.webp",
                "label": "RKayamori06",
                "name": "つかの間の安息",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001110,
                        "l": "RKayamoriSkill06",
                        "n": "バーニングインパクト",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001062,
                        "l": "Passive.Start_FireEnhance03",
                        "n": "[Auto] 危険な火遊び",
                        "s": 10,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001107,
                "image": "RKayamoriAnniv2023_R3_Thumbnail.webp",
                "label": "RKayamori07",
                "name": "ナイトクルーズ・エスコート",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001111,
                        "l": "RKayamoriSkill07",
                        "n": "サンダーパルス",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001112,
                        "l": "RKayamoriSkill54",
                        "n": "迅雷風烈",
                        "c": 16,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001081,
                        "l": "Passive.Start_ThunderEnhance04",
                        "n": "[Auto] 雷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001064,
                        "l": "Passive.Start_ThunderEnhance02",
                        "n": "[Auto] 雷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001108,
                "image": "RKayamoriCombat2023_R3_Thumbnail.webp",
                "label": "RKayamori08",
                "name": "The Feel of the Throne",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Dark",
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001113,
                        "l": "RKayamoriSkill55",
                        "n": "黒曜のオーバーロード",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "SkillSwitch"
                            ]
                        ]
                    },
                    {
                        "i": 46001116,
                        "l": "RKayamoriSkill08",
                        "n": "炯眼の構え",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "MindEye"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001123,
                        "l": "Passive.Condition_AttackUp05",
                        "n": "[Auto] 心眼の境地",
                        "s": 0,
                        "c": "SpecialStatusCountByType(78)>0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001143,
                        "l": "Passive.Start_GiveDefenseDebuffUp03",
                        "n": "[Auto] 王の眼差し",
                        "s": 0,
                        "c": "SpecialStatusCountByType(78)>0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001124,
                        "l": "Passive.Start_ALLEnhance02",
                        "n": "[Auto] 万物の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                212
            ],
            "wis": [
                7,
                206
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                9,
                214
            ],
            "luk": [
                7,
                207
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-02-23 02:00:00+00:00"
    },
    {
        "id": 12,
        "image": "YIzumiIcon.webp",
        "w_image": "YIzumiProfile.webp",
        "label": "YIzumi",
        "name": "和泉 ユキ — Yuki Izumi — ユッキー Yukkii",
        "ruby": "いずみ ユキ",
        "team": "31A",
        "profile": {
            "cv": "前川涼子",
            "vo": "",
            "bd": "9月17日",
            "bp": "新潟",
            "hg": "160cm",
            "sc": "『Hello World』",
            "desc": "ハッカー集団『オーキッド』に所属していた、第三次世界大戦を防いだ実績を持つ天才ハッカー。\nボケだらけの31Aの中では唯一の常識人で、ツッコミ役を一手に担う。\n茅森が所属していた伝説的バンド『She is Legend』のファン。\nセラフ部隊に入ってからは茅森に振り回されつつも親身に支える。"
        },
        "cards": [
            {
                "id": 1001201,
                "image": "YIzumiDefault_R1_Thumbnail.webp",
                "label": "YIzumi01",
                "name": "Attack or March",
                "role": "Breaker",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46001202,
                        "l": "YIzumiSkill01",
                        "n": "ブレイクバースト",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 5,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001202,
                "image": "YIzumiDefault_R2_Thumbnail.webp",
                "label": "YIzumi02",
                "name": "夢幻のSleeping Ocelot",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001205,
                        "l": "YIzumiSkill04",
                        "n": "クールダウン",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001203,
                "image": "YIzumiDefault_R3_Thumbnail.webp",
                "label": "YIzumi03",
                "name": "終いのSpitfire",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001203,
                        "l": "YIzumiSkill02",
                        "n": "ブレイクカノン",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001206,
                        "l": "YIzumiSkill51",
                        "n": "流星",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001261,
                        "l": "YIzumiSkill51Ev1",
                        "n": "流星+",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001204,
                "image": "YIzumiYukata2022_R3_Thumbnail.webp",
                "label": "YIzumi04",
                "name": "夏椿、けうらなる夜光星",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001204,
                        "l": "YIzumiSkill03",
                        "n": "銀蜂",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001207,
                        "l": "YIzumiSkill52",
                        "n": "牡丹",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001061,
                        "l": "Passive.Start_FireEnhance02",
                        "n": "[Auto] 火の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001205,
                "image": "YIzumiAnniv2023_R3_Thumbnail.webp",
                "label": "YIzumi05",
                "name": "ナイトクルーズ・アテンダント",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001208,
                        "l": "YIzumiSkill05",
                        "n": "スパイクサージ",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001209,
                        "l": "YIzumiSkill53",
                        "n": "スーパーセル",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001081,
                        "l": "Passive.Start_ThunderEnhance04",
                        "n": "[Auto] 雷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001206,
                "image": "YIzumiSwim2023_R2_Thumbnail.webp",
                "label": "YIzumi06",
                "name": "KETSUの休日",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001210,
                        "l": "YIzumiSkill06",
                        "n": "レッドオペレーション",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001093,
                        "l": "Passive.Turn_StabCriticalDamageUp01",
                        "n": "[Auto] 突の躍動",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001207,
                "image": "YIzumiBeauty_R3_Thumbnail.webp",
                "label": "YIzumi07",
                "name": "踊るリンカネーション",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001211,
                        "l": "YIzumiSkill07",
                        "n": "乙女の輝き",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001212,
                        "l": "YIzumiSkill54",
                        "n": "光輝の夜明け",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Light",
                                "SuperBreak"
                            ],
                            [
                                "Self",
                                "AttackDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001097,
                        "l": "Passive.Start_DamageRateBuffUp02",
                        "n": "[Auto] 強烈",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "DamageRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001208,
                "image": "YIzumiSnowWhite_R3_Thumbnail.webp",
                "label": "YIzumi08",
                "name": "君を待つ紅玉",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001213,
                        "l": "YIzumiSkill08",
                        "n": "仮面のワルツ",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSkillUsedCount"
                            ]
                        ]
                    },
                    {
                        "i": 46001214,
                        "l": "YIzumiSkill55",
                        "n": "乙女の秘め事",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "Field",
                                "Dark",
                                "Zone"
                            ],
                            [
                                "All",
                                "RemoveBuff"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001121,
                        "l": "Passive.disarmament_AttackUpAll01",
                        "n": "[Auto] 浄化の喝采",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "AdditionalHitOnRemovingBuff"
                            ],
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001120,
                        "l": "Passive.Break_AttackUpAll01",
                        "n": "[Auto] 破砕の喝采",
                        "s": 3,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "AdditionalHitOnBreaking"
                            ],
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                9,
                214
            ],
            "spr": [
                9,
                213
            ],
            "luk": [
                7,
                206
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-02-16 02:00:00+00:00"
    },
    {
        "id": 13,
        "image": "MAikawaIcon.webp",
        "w_image": "MAikawaProfile.webp",
        "label": "MAikawa",
        "name": "逢川 めぐみ — Megumi Aikawa — めぐみん Megumin",
        "ruby": "あいかわ めぐみ",
        "team": "31A",
        "profile": {
            "cv": "伊波杏樹",
            "vo": "",
            "bd": "10月28日",
            "bp": "大阪",
            "hg": "159cm",
            "sc": "『救世主様のお出ましや』",
            "desc": "関西出身の勝気なサイキック少女。\n超能力を扱えるが、その力は未知数。というか、セラフ部隊に入ってからは特に役に立っていない。\nしかし自分が世界を救う救世主であると信じている。\n同世代で天才としてもてはやされていた茅森に対して勝手にライバル意識を持っている。"
        },
        "cards": [
            {
                "id": 1001301,
                "image": "MAikawaDefault_R1_Thumbnail.webp",
                "label": "MAikawa01",
                "name": "Plain or Wild",
                "role": "Debuffer",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46001302,
                        "l": "MAikawaSkill01",
                        "n": "スタンブレード",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "StunRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001302,
                "image": "MAikawaDefault_R2_Thumbnail.webp",
                "label": "MAikawa02",
                "name": "Impact Stream",
                "role": "Debuffer",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001303,
                        "l": "MAikawaSkill02",
                        "n": "ハードブレード",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001303,
                "image": "MAikawaDefault_R3_Thumbnail.webp",
                "label": "MAikawa03",
                "name": "Ikki Burst Strike",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001305,
                        "l": "MAikawaSkill04",
                        "n": "フルスイング",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "StunRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001306,
                        "l": "MAikawaSkill51",
                        "n": "リミット・インパクト",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "StunRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001361,
                        "l": "MAikawaSkill51Ev1",
                        "n": "リミット・インパクト+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "StunRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001012,
                        "l": "Passive.Start_StunAll01",
                        "n": "[Auto] 威嚇の叫び",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "All",
                                "StunRandom"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001305,
                "image": "MAikawaPrecious_R3_Thumbnail.webp",
                "label": "MAikawa05",
                "name": "一夜の夢",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001304,
                        "l": "MAikawaSkill03",
                        "n": "ネイキッドイレイザー",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Fragile"
                            ]
                        ]
                    },
                    {
                        "i": 46001307,
                        "l": "MAikawaSkill52",
                        "n": "ブレイブ・ストライク",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "StunRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001019,
                        "l": "Passive.Turn_Rate30_AttackUp01",
                        "n": "[Auto] 野生の勘",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001306,
                "image": "MAikawaMaiden_R3_Thumbnail.webp",
                "label": "MAikawa06",
                "name": "心、躍るFuel",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001308,
                        "l": "MAikawaSkill05",
                        "n": "クールダウン",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46001309,
                        "l": "MAikawaSkill53",
                        "n": "神楽浄火・閃",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Fire",
                                "DefenseDown"
                            ],
                            [
                                "Field",
                                "Fire",
                                "Zone"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001082,
                        "l": "Passive.Start_FireEnhance04",
                        "n": "[Auto] 火の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001029,
                        "l": "Passive.Start_Enemy_DefenceDown01",
                        "n": "[Auto] 弱化",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001307,
                "image": "MAikawaSuite_R3_Thumbnail.webp",
                "label": "MAikawa07",
                "name": "トワイライト・グロース",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001310,
                        "l": "MAikawaSkill06",
                        "n": "ナイトフォール",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Misfortune"
                            ]
                        ]
                    },
                    {
                        "i": 46001311,
                        "l": "MAikawaSkill54",
                        "n": "ヒットチャートからの一閃",
                        "c": 15,
                        "u": 1,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Dark",
                                "DefenseDown"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ],
                            [
                                "Single",
                                "HealDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001094,
                        "l": "Passive.Start_DarkEnhance03",
                        "n": "[Auto] 闇の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001107,
                        "l": "Passive.UseSkill_AttackUp01",
                        "n": "[Auto] サイキックハイ",
                        "s": 3,
                        "c": "PlayedSkillCount(MAikawaSkill54)>=1",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001308,
                "image": "MAikawaSwim2024_R3_Thumbnail.webp",
                "label": "MAikawa08",
                "name": "ネバーエンド・サマー",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001312,
                        "l": "MAikawaSkill55",
                        "n": "潮風ハイボルテージ",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Thunder",
                                "DefenseDown"
                            ],
                            [
                                "Field",
                                "Thunder",
                                "Zone"
                            ]
                        ]
                    },
                    {
                        "i": 46401301,
                        "l": "MAikawaPassiveSkill01",
                        "n": "メディテーション",
                        "c": 0,
                        "u": -1,
                        "e": [
                            [
                                "Field",
                                "ZoneUpEternal"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001081,
                        "l": "Passive.Start_ThunderEnhance04",
                        "n": "[Auto] 雷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001090,
                        "l": "Passive.Start_GiveDefenseDebuffUp01",
                        "n": "[Auto] 侵食",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "MC04B_00",
                "end": "MC04B_14"
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                9,
                214
            ],
            "con": [
                7,
                206
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-07-20 11:00:00+00:00"
    },
    {
        "id": 14,
        "image": "TTojoIcon.webp",
        "w_image": "TTojoProfile.webp",
        "label": "TTojo",
        "name": "東城 つかさ — Tsukasa Tojo — つかさっち Tsukasacchi",
        "ruby": "とうじょう つかさ",
        "team": "31A",
        "profile": {
            "cv": "天海由梨奈",
            "vo": "",
            "bd": "2月14日",
            "bp": "東京",
            "hg": "163cm",
            "sc": "『真実は一つと限らない』",
            "desc": "完璧な外見を持つ、自称エリート諜報員。\nしかし、どこからどう見ても中身はポンコツ諜報員。\nただ、役に立たない情報だけは無駄に詳しい。\n同じ31Aの朝倉可憐に美肌のコツを教えては、悦に入っている。"
        },
        "cards": [
            {
                "id": 1001401,
                "image": "TTojoDefault_R1_Thumbnail.webp",
                "label": "TTojo01",
                "name": "Serious or Stupid",
                "role": "Buffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46001402,
                        "l": "TTojoSkill01",
                        "n": "エンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 5,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001402,
                "image": "TTojoDefault_R2_Thumbnail.webp",
                "label": "TTojo02",
                "name": "嗟歎のスリーパー",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001404,
                        "l": "TTojoSkill03",
                        "n": "フィルエンハンス",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001034,
                        "l": "Passive.Turn_OverDrivePointUpRandom01",
                        "n": "[Auto] 福運",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUpRandom"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001403,
                "image": "TTojoDefault_R3_Thumbnail.webp",
                "label": "TTojo03",
                "name": "メメント・モリの美少女",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001403,
                        "l": "TTojoSkill02",
                        "n": "ブレスショット",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001406,
                        "l": "TTojoSkill51",
                        "n": "メメント・モリ",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Field",
                                "Fire",
                                "Zone"
                            ]
                        ]
                    },
                    {
                        "i": 46001461,
                        "l": "TTojoSkill51Ev1",
                        "n": "メメント・モリ+",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Field",
                                "Fire",
                                "Zone"
                            ],
                            [
                                "AllyAll",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001007,
                        "l": "Passive.Start_FieldEffectFire01",
                        "n": "[Auto] 灼熱の陣",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Field",
                                "Fire",
                                "Zone"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001404,
                "image": "TTojoSwim2022_R3_Thumbnail.webp",
                "label": "TTojo04",
                "name": "真夏のPrayer",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001405,
                        "l": "TTojoSkill04",
                        "n": "シルキーフレア",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Fire",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46001407,
                        "l": "TTojoSkill52",
                        "n": "ウィッシュカムトゥルー",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ],
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001082,
                        "l": "Passive.Start_FireEnhance04",
                        "n": "[Auto] 火の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001016,
                        "l": "Passive.Turn_AttackUpAll01",
                        "n": "[Auto] 英雄の凱歌",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001405,
                "image": "TTojoSuite_R3_Thumbnail.webp",
                "label": "TTojo05",
                "name": "シークレットサービス・サイレンス",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001408,
                        "l": "TTojoSkill05",
                        "n": "ホーリーエンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46001409,
                        "l": "TTojoSkill53",
                        "n": "レディ・イン・ミラージュ",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "AllyFront",
                                "CriticalRateUp"
                            ],
                            [
                                "AllyFront",
                                "CriticalDamageUp"
                            ],
                            [
                                "Field",
                                "Light",
                                "Zone"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001083,
                        "l": "Passive.Start_LightEnhance03",
                        "n": "[Auto] 光の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001069,
                        "l": "Passive.Start_GiveAttackBuffUp01",
                        "n": "[Auto] 気転",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001406,
                "image": "TTojoRabbit_R3_Thumbnail.webp",
                "label": "TTojo06",
                "name": "バニーファイト・デビエーション",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001410,
                        "l": "TTojoSkill06",
                        "n": "ピクシースマイル",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46001411,
                        "l": "TTojoSkill54",
                        "n": "今宵、快楽ナイトメア",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "ResistDownOverwrite"
                            ],
                            [
                                "AllyFront",
                                "Funnel"
                            ],
                            [
                                "All",
                                "Dark",
                                "ResistDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001094,
                        "l": "Passive.Start_DarkEnhance03",
                        "n": "[Auto] 闇の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001069,
                        "l": "Passive.Start_GiveAttackBuffUp01",
                        "n": "[Auto] 気転",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001407,
                "image": "TTojoSwim2024_R2_Thumbnail.webp",
                "label": "TTojo07",
                "name": "そよかぜ",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46401401,
                        "l": "TTojoPassiveSkill01",
                        "n": "日陰のシエスタ",
                        "c": 0,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001126,
                        "l": "Passive.Start_GiveAttackBuffUp02",
                        "n": "[Auto] 増幅",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                7,
                207
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                209
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-07-20 11:00:00+00:00"
    },
    {
        "id": 15,
        "image": "KAsakuraIcon.webp",
        "w_image": "KAsakuraProfile.webp",
        "label": "KAsakura",
        "name": "朝倉 可憐 — Karen Asakura — かれりん Karerin",
        "ruby": "あさくら かれん",
        "team": "31A",
        "profile": {
            "cv": "芹澤優",
            "vo": "鈴木このみ",
            "bd": "7月11日",
            "bp": "栃木",
            "hg": "158cm",
            "sc": "『呼吸をするように息の根を止める』",
            "desc": "FPSが得意なゲーマー少女。その容姿通りの可愛らしい性格。\nゲームをプレイし続けられる理由から、片手で食べられるジャンクフードを好む。\n新生『She is Legend』でツインボーカルの一翼を担う。"
        },
        "cards": [
            {
                "id": 1001501,
                "image": "KarenDefault_R1_Thumbnail.webp",
                "label": "KAsakura01",
                "name": "Laugh or Cry",
                "role": "Blaster",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46001502,
                        "l": "KAsakuraSkill01",
                        "n": "乱舞",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001502,
                "image": "KarenDefault_R2_Thumbnail.webp",
                "label": "KAsakura02",
                "name": "最前線のブルワーク",
                "role": "Blaster",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001504,
                        "l": "KAsakuraSkill03",
                        "n": "狂乱舞",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001503,
                "image": "KarenDefault_R3_Thumbnail.webp",
                "label": "KAsakura03",
                "name": "紅蓮月華のKillrazor",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001503,
                        "l": "KAsakuraSkill02",
                        "n": "ワイルドスロー",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001506,
                        "l": "KAsakuraSkill51",
                        "n": "ブラッディ・ダンス",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001561,
                        "l": "KAsakuraSkill51Ev1",
                        "n": "ブラッディ・ダンス+",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001010,
                        "l": "Passive.Start_Funnel01",
                        "n": "[Auto] 狂乱の型",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001504,
                "image": "KarenRedWolf_R3_Thumbnail.webp",
                "label": "KAsakura04",
                "name": "スカーレット・リベリオン",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001505,
                        "l": "KAsakuraSkill04",
                        "n": "フューリーインパルス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001507,
                        "l": "KAsakuraSkill52",
                        "n": "劫火絢爛",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001058,
                        "l": "Passive.Turn_CriticalRateUp02",
                        "n": "[Auto] 技巧",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001505,
                "image": "KarenSuite_R3_Thumbnail.webp",
                "label": "KAsakura05",
                "name": "シークレットサービス・デモリッシュ",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001508,
                        "l": "KAsakuraSkill05",
                        "n": "キルキルヒカル",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001509,
                        "l": "KAsakuraSkill53",
                        "n": "破壊のシニシズム",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "DamageRateChangeAttackSkill"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001083,
                        "l": "Passive.Start_LightEnhance03",
                        "n": "[Auto] 光の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001078,
                        "l": "Passive.Start_LightEnhance02",
                        "n": "[Auto] 光の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001506,
                "image": "KarenDefault_R2a_Thumbnail.webp",
                "label": "KAsakura06",
                "name": "狂悖暴戻のランダムウォーク",
                "role": "Blaster",
                "tier": "S",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001510,
                        "l": "KAsakuraSkill06",
                        "n": "残焔",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001005,
                        "l": "Passive.Condition_SpUp01",
                        "n": "[Auto] 決意",
                        "s": 3,
                        "c": "Sp()>=10 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001507,
                "image": "KarenSwim2024_R3_Thumbnail.webp",
                "label": "KAsakura07",
                "name": "盛夏のシャーク・ザ・リッパー",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46001511,
                        "l": "KAsakuraSkill07",
                        "n": "意気揚々",
                        "c": 10,
                        "u": 1,
                        "e": [
                            [
                                "Self",
                                "DoubleActionExtraSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001512,
                        "l": "KAsakuraSkill54",
                        "n": "フグリングクラッシュ",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "DamageRateChangeAttackSkill"
                            ],
                            [
                                "AllyAll",
                                "CriticalRateUp"
                            ],
                            [
                                "AllyAll",
                                "Dark",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001094,
                        "l": "Passive.Start_DarkEnhance03",
                        "n": "[Auto] 闇の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001075,
                        "l": "Passive.Start_DarkEnhance02",
                        "n": "[Auto] 闇の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                9,
                213
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                7,
                207
            ],
            "luk": [
                9,
                215
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-07-20 11:00:00+00:00"
    },
    {
        "id": 16,
        "image": "KarenIcon.webp",
        "w_image": "KarenProfile.webp",
        "label": "Karen",
        "name": "カレン — Karen — ",
        "ruby": "カレン",
        "team": "31A",
        "profile": null,
        "cards": [],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                9,
                213
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                7,
                207
            ],
            "luk": [
                9,
                215
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 1,
        "in_date": ""
    },
    {
        "id": 17,
        "image": "TKunimiIcon.webp",
        "w_image": "TKunimiProfile.webp",
        "label": "TKunimi",
        "name": "國見 タマ — Tama Kunimi — おタマさん Otamasan",
        "ruby": "くにみ タマ",
        "team": "31A",
        "profile": {
            "cv": "古賀葵",
            "vo": "",
            "bd": "11月1日",
            "bp": "長崎",
            "hg": "137cm",
            "sc": "『天下一品』",
            "desc": "こんな見た目で戦艦の元艦長。オホーツク海で敗れ去った。\n天然ボケな性格だが、自覚はない。\nいつも庇ってくれる同じ31Aの逢川めぐみを慕っている。\n背が低いことをコンプレックスに感じている。"
        },
        "cards": [
            {
                "id": 1001701,
                "image": "TKunimiDefault_R1_Thumbnail.webp",
                "label": "TKunimi01",
                "name": "Truth or Lies",
                "role": "Healer",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46001702,
                        "l": "TKunimiSkill01",
                        "n": "リカバー",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001702,
                "image": "TKunimiDefault_R2_Thumbnail.webp",
                "label": "TKunimi02",
                "name": "ときめきアークライト",
                "role": "Healer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001703,
                        "l": "TKunimiSkill02",
                        "n": "フィルリカバー",
                        "c": 8,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001703,
                "image": "TKunimiDefault_R3_Thumbnail.webp",
                "label": "TKunimi03",
                "name": "気合一閃エンジェルセイラー",
                "role": "Healer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001704,
                        "l": "TKunimiSkill03",
                        "n": "闘気斬",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46001706,
                        "l": "TKunimiSkill51",
                        "n": "リザレクト・ライト",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "AllyFront",
                                "ReviveDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001018,
                        "l": "Passive.Turn_HealAll01",
                        "n": "[Auto] 博愛の心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyFront",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001704,
                "image": "TKunimiDefault_R2a_Thumbnail.webp",
                "label": "TKunimi04",
                "name": "無邪気なデザイア",
                "role": "Healer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001708,
                        "l": "TKunimiSkill05",
                        "n": "ヒーリング",
                        "c": 7,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "RegenerationDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001026,
                        "l": "Passive.Turn_Sub_HealDp01",
                        "n": "[Auto] 友愛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001705,
                "image": "TKunimiMagical_R3_Thumbnail.webp",
                "label": "TKunimi05",
                "name": "魔法の国のエレメンタル",
                "role": "Healer",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001705,
                        "l": "TKunimiSkill04",
                        "n": "フレイムテンペスト",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "AttackDown"
                            ]
                        ]
                    },
                    {
                        "i": 46001707,
                        "l": "TKunimiSkill52",
                        "n": "リバイブ・ヴェール",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyAll",
                                "AttackUp"
                            ],
                            [
                                "AllyAllWithoutSelf",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001082,
                        "l": "Passive.Start_FireEnhance04",
                        "n": "[Auto] 火の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001016,
                        "l": "Passive.Turn_AttackUpAll01",
                        "n": "[Auto] 英雄の凱歌",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001706,
                "image": "TKunimiNewYear2023_R3_Thumbnail.webp",
                "label": "TKunimi06",
                "name": "激突！！エア・ベース",
                "role": "Healer",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001709,
                        "l": "TKunimiSkill06",
                        "n": "きらめきのエール",
                        "c": 8,
                        "u": 5,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ],
                            [
                                "AllyFront",
                                "FightingSpirit"
                            ]
                        ]
                    },
                    {
                        "i": 46001710,
                        "l": "TKunimiSkill53",
                        "n": "二律背反スパークピッキング",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "AllyAll",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001079,
                        "l": "Passive.Start_ThunderEnhance03",
                        "n": "[Auto] 雷の采配",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001707,
                "image": "TKunimiSwim2023_R3_Thumbnail.webp",
                "label": "TKunimi07",
                "name": "幻想のコーラル",
                "role": "Healer",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001711,
                        "l": "TKunimiSkill07",
                        "n": "プリズムアタック",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46001712,
                        "l": "TKunimiSkill54",
                        "n": "カレイド・レインシャワー",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyAll",
                                "RegenerationDp"
                            ],
                            [
                                "AllyAllWithoutSelf",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001083,
                        "l": "Passive.Start_LightEnhance03",
                        "n": "[Auto] 光の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001095,
                        "l": "Passive.Start_GiveHealUp01",
                        "n": "[Auto] 恵風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveHealUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001708,
                "image": "TKunimiSuite_R3_Thumbnail.webp",
                "label": "TKunimi08",
                "name": "トワイライト・メモリーズ",
                "role": "Buffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001713,
                        "l": "TKunimiSkill08",
                        "n": "デヴォーション",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "AllySub",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "AttackDown"
                            ]
                        ]
                    },
                    {
                        "i": 46001714,
                        "l": "TKunimiSkill55",
                        "n": "オープン・ザ・ロード",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "AllySingle",
                                "CriticalRateUp"
                            ],
                            [
                                "AllySingle",
                                "CriticalDamageUp"
                            ],
                            [
                                "AllySingle",
                                "MindEye"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001106,
                        "l": "Passive.Start_ALLEnhance01",
                        "n": "[Auto] 万物の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001100,
                        "l": "Passive.Start_HealSpAcc05",
                        "n": "[Auto] 俊敏",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1001709,
                "image": "TKunimiSwim2024_R2_Thumbnail.webp",
                "label": "TKunimi09",
                "name": "戦ぐゆりかご",
                "role": "Healer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46001715,
                        "l": "TKunimiSkill09",
                        "n": "おひさまの匂い",
                        "c": 6,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ],
                            [
                                "AllyFront",
                                "RemoveSpecialStatus"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 3,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001026,
                        "l": "Passive.Turn_Sub_HealDp01",
                        "n": "[Auto] 友愛",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                9,
                214
            ],
            "dex": [
                8,
                208
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                209
            ],
            "con": [
                8,
                209
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-07-05 02:00:00+00:00"
    },
    {
        "id": 21,
        "image": "EAoiIcon.webp",
        "w_image": "EAoiProfile.webp",
        "label": "EAoi",
        "name": "蒼井 えりか — Erika Aoi — ",
        "ruby": "あおい えりか",
        "team": "31B",
        "profile": {
            "cv": "宮下早紀",
            "vo": "",
            "bd": "7月7日",
            "bp": "埼玉",
            "hg": "158cm",
            "sc": "『どうか安寧な記憶を』",
            "desc": "テストで必ず１００点を取れる天才少女。\n３１Ｂの部隊長だが、自分に自信がなくいつもおどおどとしている。\n同じ３１Ｂのビャッコの存在だけが心のよりどころ。\nよくぽかーんと呆けてしまう。"
        },
        "cards": [
            {
                "id": 1002101,
                "image": "EAoiDefault_R1_Thumbnail.webp",
                "label": "EAoi01",
                "name": "戦場の花散らし",
                "role": "Defender",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46002102,
                        "l": "EAoiSkill01",
                        "n": "シールドレイ",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001005,
                        "l": "Passive.Condition_SpUp01",
                        "n": "[Auto] 決意",
                        "s": 5,
                        "c": "Sp()>=10 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002102,
                "image": "EAoiDefault_R2_Thumbnail.webp",
                "label": "EAoi02",
                "name": "セツナ・memory",
                "role": "Defender",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46002103,
                        "l": "EAoiSkill02",
                        "n": "プロヴォーク",
                        "c": 7,
                        "u": 10,
                        "e": [
                            [
                                "Self",
                                "HealDp"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002103,
                "image": "EAoiDefault_R3_Thumbnail.webp",
                "label": "EAoi03",
                "name": "ココロ・Inspire",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46002104,
                        "l": "EAoiSkill03",
                        "n": "シールドトルネード",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealDpByDamage"
                            ]
                        ]
                    },
                    {
                        "i": 46002106,
                        "l": "EAoiSkill51",
                        "n": "エンジェルズ・ウィング",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "Self",
                                "Invincible"
                            ],
                            [
                                "All",
                                "Cover"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001015,
                        "l": "Passive.Turn_Revive01",
                        "n": "[Auto] くじけぬ心",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "ReviveDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002104,
                "image": "EAoiWaitress_R3_Thumbnail.webp",
                "label": "EAoi04",
                "name": "トドケ・Miracle",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46002105,
                        "l": "EAoiSkill04",
                        "n": "ご注文を伺います",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ],
                            [
                                "Self",
                                "TokenSet"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    },
                    {
                        "i": 46002107,
                        "l": "EAoiSkill52",
                        "n": "青春色のシュプール",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "TokenAttack"
                            ],
                            [
                                "Single",
                                "TokenChangeTimeline"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001081,
                        "l": "Passive.Start_ThunderEnhance04",
                        "n": "[Auto] 雷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001088,
                        "l": "Passive.Start_TokenSetByAttacked",
                        "n": "[Auto] 護りの真髄",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "TokenSetByAttacked"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001038,
                        "l": "Passive.Token_AttackUp01",
                        "n": "[Auto] 高揚",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUpPerToken"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002105,
                "image": "EAoiNewYear2024_R3_Thumbnail.webp",
                "label": "EAoi05",
                "name": "キララ・究極のアイドル",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46002108,
                        "l": "EAoiSkill05",
                        "n": "アイドルスマイル",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "DamageRateChangeAttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46002109,
                        "l": "EAoiSkill53",
                        "n": "ダンスインザブルー",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "DebuffGuard"
                            ],
                            [
                                "AllyAllWithoutSelf",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001109,
                        "l": "Passive.Start_ThreeFireDefenceUp01",
                        "n": "[Auto] 火炎の護り",
                        "s": 0,
                        "c": "CountBC(IsPlayer() &&IsNatureElement(Fire)==1)>=3",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001033,
                        "l": "Passive.Turn_OverDriveUp01",
                        "n": "[Auto] 向上心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "MC03_01",
                "end": ""
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                8,
                208
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                7,
                207
            ],
            "con": [
                9,
                215
            ]
        },
        "reincarnation": 3,
        "in_date": "2023-12-29 02:00:00+00:00"
    },
    {
        "id": 22,
        "image": "IMinaseIcon.webp",
        "w_image": "IMinaseProfile.webp",
        "label": "IMinase",
        "name": "水瀬 いちご — Ichigo Minase — ",
        "ruby": "みなせ いちご",
        "team": "31B",
        "profile": {
            "cv": "愛美",
            "vo": "",
            "bd": "1月15日",
            "bp": "愛知",
            "hg": "172cm",
            "sc": "『インフェルノに焼かれな』",
            "desc": "水瀬すももと姉妹の殺し屋。いちごは姉。\n言動はがさつで、すぐひとに銃口を向けるおっかない人物。\n好きなスポーツは野球。\n好きな食べ物は野菜スティック。"
        },
        "cards": [
            {
                "id": 1002201,
                "image": "IMinaseDefault_R1_Thumbnail.webp",
                "label": "IMinase01",
                "name": "戦場の華火",
                "role": "Attacker",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46002202,
                        "l": "IMinaseSkill01",
                        "n": "キャノンボール",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 5,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002202,
                "image": "IMinaseDefault_R2_Thumbnail.webp",
                "label": "IMinase02",
                "name": "あなたのために",
                "role": "Attacker",
                "tier": "S",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002204,
                        "l": "IMinaseSkill03",
                        "n": "天の慈悲",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001087,
                        "l": "Passive.Start_Enemy_StabDefenceDown01",
                        "n": "[Auto] 突の威圧",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002203,
                "image": "IMinaseDefault_R3_Thumbnail.webp",
                "label": "IMinase03",
                "name": "嬉々迫るフォール・イン・ラヴ",
                "role": "Attacker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002203,
                        "l": "IMinaseSkill02",
                        "n": "キラーショット",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46002205,
                        "l": "IMinaseSkill51",
                        "n": "スパークル・トライショット",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46002261,
                        "l": "IMinaseSkill51Ev1",
                        "n": "スパークル・トライショット+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001009,
                        "l": "Passive.Start_FieldEffectThunder01",
                        "n": "[Auto] 雷鳴の陣",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Field",
                                "Thunder",
                                "Zone"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002204,
                "image": "IMinaseNewYear2024_R3_Thumbnail.webp",
                "label": "IMinase04",
                "name": "君の瞳にコロしてる",
                "role": "Attacker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002206,
                        "l": "IMinaseSkill04",
                        "n": "セルフパッション",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    },
                    {
                        "i": 46002207,
                        "l": "IMinaseSkill52",
                        "n": "狂騒のヨスガ",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001108,
                        "l": "Passive.Start_ThreeFireAttackUp01",
                        "n": "[Auto] 火炎の極意",
                        "s": 0,
                        "c": "CountBC(IsPlayer() &&IsNatureElement(Fire)==1)>=3",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001061,
                        "l": "Passive.Start_FireEnhance02",
                        "n": "[Auto] 火の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                9,
                213
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-12-29 02:00:00+00:00"
    },
    {
        "id": 23,
        "image": "SMinaseIcon.webp",
        "w_image": "SMinaseProfile.webp",
        "label": "SMinase",
        "name": "水瀬 すもも — Sumomo Minase — ",
        "ruby": "みなせ すもも",
        "team": "31B",
        "profile": {
            "cv": "小路裕夕",
            "vo": "",
            "bd": "9月6日",
            "bp": "愛知",
            "hg": "154cm",
            "sc": "『ニブルヘイムで凍えろにゃ』",
            "desc": "水瀬いちごと姉妹の殺し屋。すももは妹。\n殺し屋として天賦の才を持つ。\n雰囲気はアンニュイに映るが、キレさせると危険。\n好きな食べ物は５円チョコ。"
        },
        "cards": [
            {
                "id": 1002301,
                "image": "SMinaseDefault_R1_Thumbnail.webp",
                "label": "SMinase01",
                "name": "戦場の焔焔",
                "role": "Breaker",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46002302,
                        "l": "SMinaseSkill01",
                        "n": "残影",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 5,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002302,
                "image": "SMinaseDefault_R2_Thumbnail.webp",
                "label": "SMinase02",
                "name": "積乱雲",
                "role": "Breaker",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002305,
                        "l": "SMinaseSkill04",
                        "n": "残心撃",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002303,
                "image": "SMinaseDefault_R3_Thumbnail.webp",
                "label": "SMinase03",
                "name": "残光",
                "role": "Breaker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002303,
                        "l": "SMinaseSkill02",
                        "n": "風斬りの刃",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46002306,
                        "l": "SMinaseSkill51",
                        "n": "スパークル・トライエッジ",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46002361,
                        "l": "SMinaseSkill51Ev1",
                        "n": "スパークル・トライエッジ+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001019,
                        "l": "Passive.Turn_Rate30_AttackUp01",
                        "n": "[Auto] 野生の勘",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002304,
                "image": "SMinaseSwim2022_R3_Thumbnail.webp",
                "label": "SMinase04",
                "name": "茹だるアサシン",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002304,
                        "l": "SMinaseSkill03",
                        "n": "ランブルシャーク",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46002307,
                        "l": "SMinaseSkill52",
                        "n": "ヘイルストーム",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002305,
                "image": "SMinaseDefault_R2a_Thumbnail.webp",
                "label": "SMinase05",
                "name": "類は友を呼ぶ",
                "role": "Breaker",
                "tier": "S",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002308,
                        "l": "SMinaseSkill05",
                        "n": "ねこじゃらし",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "Thunder",
                                "AttackUp"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                212
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                8,
                212
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                208
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-03-22 02:00:00+00:00"
    },
    {
        "id": 24,
        "image": "SHiguchiIcon.webp",
        "w_image": "SHiguchiProfile.webp",
        "label": "SHiguchi",
        "name": "樋口 聖華 — Seika Higuchi — ひぐみん Higumin",
        "ruby": "ひぐち せいか",
        "team": "31B",
        "profile": {
            "cv": "山根綺",
            "vo": "",
            "bd": "11月8日",
            "bp": "滋賀",
            "hg": "151cm",
            "sc": "『新鮮な「死」を見せてくれ』",
            "desc": "基地内の科学技術研究所に務める研究員。\nセラフにも詳しい。\n天才科学者であることは間違いないが、その熱意は狂気的。\n生命の「死」すらにも興味を持ち、そのため、自らセラフ部隊員となり、前線へも繰り出している。"
        },
        "cards": [
            {
                "id": 1002401,
                "image": "SHiguchiDefault_R1_Thumbnail.webp",
                "label": "SHiguchi01",
                "name": "戦場の科学者",
                "role": "Buffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46002402,
                        "l": "SHiguchiSkill01",
                        "n": "エンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001030,
                        "l": "Passive.Start_OverDriveUp01",
                        "n": "[Auto] 咆吼",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002402,
                "image": "SHiguchiDefault_R2_Thumbnail.webp",
                "label": "SHiguchi02",
                "name": "或る少女の物語",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002404,
                        "l": "SHiguchiSkill03",
                        "n": "リサイクル",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealDpByDamage"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001028,
                        "l": "Passive.Condition_Dp50Less_DpUp01",
                        "n": "[Auto] 気合",
                        "s": 3,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002403,
                "image": "SHiguchiDefault_R3_Thumbnail.webp",
                "label": "SHiguchi03",
                "name": "生者のホメオスタシス",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002403,
                        "l": "SHiguchiSkill02",
                        "n": "ドーピング",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ],
                            [
                                "AllyFront",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46002405,
                        "l": "SHiguchiSkill51",
                        "n": "トリック・カノン",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "SkillRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001033,
                        "l": "Passive.Turn_OverDriveUp01",
                        "n": "[Auto] 向上心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002404,
                "image": "SHiguchiGrace_R3_Thumbnail.webp",
                "label": "SHiguchi04",
                "name": "宙の探究、星の眩耀",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002408,
                        "l": "SHiguchiSkill04",
                        "n": "フィルエンハンス",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46002409,
                        "l": "SHiguchiSkill52",
                        "n": "アブソリュートフェノメノン",
                        "c": 9,
                        "u": 4,
                        "e": [
                            [
                                "AllySingle",
                                "AttackUp"
                            ],
                            [
                                "AllySingle",
                                "CriticalRateUp"
                            ],
                            [
                                "AllySingle",
                                "CriticalDamageUp"
                            ],
                            [
                                "AllySingle",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001069,
                        "l": "Passive.Start_GiveAttackBuffUp01",
                        "n": "[Auto] 気転",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002405,
                "image": "SHiguchiNewYear2024_R2_Thumbnail.webp",
                "label": "SHiguchi05",
                "name": "青春の発露",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002410,
                        "l": "SHiguchiSkill05",
                        "n": "ファンタズム",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 3,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001110,
                        "l": "Passive.Turn_FireCriticalRateUp01",
                        "n": "[Auto] 火の慧眼",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Fire",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                212
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 2,
        "in_date": "2023-12-29 02:00:00+00:00"
    },
    {
        "id": 25,
        "image": "KHiiragiIcon.webp",
        "w_image": "KHiiragiProfile.webp",
        "label": "KHiiragi",
        "name": "柊木 梢 — Kozue Hiiragi — こじゅ Koju",
        "ruby": "ひいらぎ こずえ",
        "team": "31B",
        "profile": {
            "cv": "小澤亜李",
            "vo": "",
            "bd": "3月18日",
            "bp": "青森",
            "hg": "157cm",
            "sc": "『眠れ、イノセントレクイエム』",
            "desc": "幽霊を見ることができる少女。\n眼帯で隠された左目を解放すると、幽霊を成仏させることが出来る。\nやや中二病。"
        },
        "cards": [
            {
                "id": 1002501,
                "image": "KHiiragiDefault_R1_Thumbnail.webp",
                "label": "KHiiragi01",
                "name": "戦場の聳動",
                "role": "Debuffer",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46002503,
                        "l": "KHiiragiSkill02",
                        "n": "ミストサイス",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "ImprisonRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001023,
                        "l": "Passive.3Turn_DefenceUp01",
                        "n": "[Auto] 警衛",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002502,
                "image": "KHiiragiDefault_R2_Thumbnail.webp",
                "label": "KHiiragi02",
                "name": "在りし日の雑踏",
                "role": "Debuffer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002502,
                        "l": "KHiiragiSkill01",
                        "n": "ミストイングレイブ",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Thunder",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001053,
                        "l": "Passive.Start_ThunderEnhance01",
                        "n": "[Auto] 雷の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002503,
                "image": "KHiiragiDefault_R3_Thumbnail.webp",
                "label": "KHiiragi03",
                "name": "蒼きノクターン",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002504,
                        "l": "KHiiragiSkill03",
                        "n": "ミストスラッシュ",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "ImprisonRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46002505,
                        "l": "KHiiragiSkill51",
                        "n": "クレール・ド・リュンヌ",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "AllyAllWithoutSelf",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 46002561,
                        "l": "KHiiragiSkill51Ev1",
                        "n": "クレール・ド・リュンヌ+",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "AllyAllWithoutSelf",
                                "AttackUp"
                            ],
                            [
                                "AllyAllWithoutSelf",
                                "HealSp"
                            ],
                            [
                                "AllyAll",
                                "GiveDebuffUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001012,
                        "l": "Passive.Start_StunAll01",
                        "n": "[Auto] 威嚇の叫び",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "All",
                                "StunRandom"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002504,
                "image": "KHiiragiBloody_R3_Thumbnail.webp",
                "label": "KHiiragi04",
                "name": "終劇のナイトフォール",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002506,
                        "l": "KHiiragiSkill04",
                        "n": "カースサイス",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Misfortune"
                            ]
                        ]
                    },
                    {
                        "i": 46002507,
                        "l": "KHiiragiSkill52",
                        "n": "フリージング・スペル",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Fragile"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001070,
                        "l": "Passive.Start_IceEnhance02",
                        "n": "[Auto] 氷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002505,
                "image": "KHiiragiWaitress_R3_Thumbnail.webp",
                "label": "KHiiragi05",
                "name": "ホップ・ステップ・スリップ！",
                "role": "Buffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "CriticalRateUp",
                    "n": "クリティカル率上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46002508,
                        "l": "KHiiragiSkill05",
                        "n": "一途なスマイル",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "AllySingle",
                                "CriticalRateUp"
                            ],
                            [
                                "AllySingle",
                                "CriticalDamageUp"
                            ]
                        ]
                    },
                    {
                        "i": 46002509,
                        "l": "KHiiragiSkill53",
                        "n": "スペシャルオーダー！",
                        "c": 6,
                        "u": 6,
                        "e": [
                            [
                                "AllyAll",
                                "Morale"
                            ],
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001127,
                        "l": "Passive.Start_MoraleEnhance01",
                        "n": "[Auto] みなぎる士気",
                        "s": 0,
                        "c": "MoraleLevel()>=6 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001033,
                        "l": "Passive.Turn_OverDriveUp01",
                        "n": "[Auto] 向上心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                8,
                209
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                212
            ],
            "con": [
                7,
                206
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-03-22 02:00:00+00:00"
    },
    {
        "id": 26,
        "image": "ByakkoIcon.webp",
        "w_image": "ByakkoProfile.webp",
        "label": "Byakko",
        "name": "ビャッコ — Byakko — ",
        "ruby": "ビャッコ",
        "team": "31B",
        "profile": {
            "cv": "ー",
            "vo": "",
            "bd": "4月8日",
            "bp": "岩手",
            "hg": "ー",
            "sc": "『ヴァゥーーーーーーー！』",
            "desc": "軍の実験の末、セラフと唯一適合した動物。\n非常に賢いが、人見知り。\n蒼井にだけは心を許している。\nカルパスが好物。"
        },
        "cards": [
            {
                "id": 1002601,
                "image": "ByakkoDefault_R1_Thumbnail.webp",
                "label": "Byakko01",
                "name": "戦場の哮り",
                "role": "Blaster",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46002602,
                        "l": "ByakkoSkill01",
                        "n": "スラッシュクロー",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002602,
                "image": "ByakkoDefault_R2_Thumbnail.webp",
                "label": "Byakko02",
                "name": "リラックスサイン",
                "role": "Blaster",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002603,
                        "l": "ByakkoSkill02",
                        "n": "イノセンス",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001036,
                        "l": "Passive.Overdrive_AttackUp02",
                        "n": "[Auto] 専心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnOverdriveStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001071,
                        "l": "Passive.Start_Enemy_IceDefenceDown01",
                        "n": "[Auto] 氷の威圧",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "Ice",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002603,
                "image": "ByakkoDefault_R3_Thumbnail.webp",
                "label": "Byakko03",
                "name": "レイジング・ビースト",
                "role": "Blaster",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002604,
                        "l": "ByakkoSkill03",
                        "n": "レイジングクロー",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46002605,
                        "l": "ByakkoSkill51",
                        "n": "ビースト・プリズン",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001019,
                        "l": "Passive.Turn_Rate30_AttackUp01",
                        "n": "[Auto] 野生の勘",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1002604,
                "image": "ByakkoBeast_R3_Thumbnail.webp",
                "label": "Byakko04",
                "name": "のもけいしさや",
                "role": "Blaster",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46002606,
                        "l": "ByakkoSkill04",
                        "n": "ヒロイックプラウド",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46002607,
                        "l": "ByakkoSkill52",
                        "n": "破壊の女王",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "DamageRateChangeAttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001064,
                        "l": "Passive.Start_ThunderEnhance02",
                        "n": "[Auto] 雷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                9,
                213
            ],
            "wis": [
                7,
                206
            ],
            "dex": [
                7,
                206
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-05-05 02:00:00+00:00"
    },
    {
        "id": 31,
        "image": "BIYamawakiIcon.webp",
        "w_image": "BIYamawakiProfile.webp",
        "label": "BIYamawaki",
        "name": "山脇・ボン・イヴァール — Ivar Bon Yamawaki — ワッキー Wakkii",
        "ruby": "やまわき・ボン・イヴァール",
        "team": "31C",
        "profile": {
            "cv": "千本木彩花",
            "vo": "",
            "bd": "8月25日",
            "bp": "熊本",
            "hg": "156cm",
            "sc": "『この世界は私の実験台よ』",
            "desc": "豊後と一緒に世界征服を企むマッドサイエンティスト。ただし自称。\n３１Ｃの部隊長であり、茅森たちと同期。\nＡを冠する部隊がその世代のエリートとして扱われるため、Ａを奪おうと茅森たちに挑戦状を叩きつける。\n高圧的で、血気盛んだが、本当は友達思いの優しい子。"
        },
        "cards": [
            {
                "id": 1003101,
                "image": "BIYamawakiDefault_R1_Thumbnail.webp",
                "label": "BIYamawaki01",
                "name": "我が道を行く",
                "role": "Attacker",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46003102,
                        "l": "BIYamawakiSkill01",
                        "n": "キラーサイス",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003102,
                "image": "BIYamawakiDefault_R2_Thumbnail.webp",
                "label": "BIYamawaki02",
                "name": "魔王の帰還",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003104,
                        "l": "BIYamawakiSkill03",
                        "n": "キリングエッジ",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001034,
                        "l": "Passive.Turn_OverDrivePointUpRandom01",
                        "n": "[Auto] 福運",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUpRandom"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003103,
                "image": "BIYamawakiDefault_R3_Thumbnail.webp",
                "label": "BIYamawaki03",
                "name": "Ebon Knight",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003103,
                        "l": "BIYamawakiSkill02",
                        "n": "アイススラッシュ",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003106,
                        "l": "BIYamawakiSkill51",
                        "n": "絶対零度",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003161,
                        "l": "BIYamawakiSkill51Ev1",
                        "n": "絶対零度+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001033,
                        "l": "Passive.Turn_OverDriveUp01",
                        "n": "[Auto] 向上心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003104,
                "image": "BIYamawakiXmas2022_R3_Thumbnail.webp",
                "label": "BIYamawaki04",
                "name": "Holy Knight",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003105,
                        "l": "BIYamawakiSkill04",
                        "n": "デディケイトギフト",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "AllySingle",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46003107,
                        "l": "BIYamawakiSkill52",
                        "n": "レイジング・レインディア",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "AllyAll",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001016,
                        "l": "Passive.Turn_AttackUpAll01",
                        "n": "[Auto] 英雄の凱歌",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003105,
                "image": "BIYamawakiDefault_R2a_Thumbnail.webp",
                "label": "BIYamawaki05",
                "name": "山脇様、ご乱心",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003108,
                        "l": "BIYamawakiSkill05",
                        "n": "イチコロスマイル",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001086,
                        "l": "Passive.Start_Enemy_SlashDefenceDown01",
                        "n": "[Auto] 斬の威圧",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003106,
                "image": "BIYamawakiDaydream_R3_Thumbnail.webp",
                "label": "BIYamawaki06",
                "name": "Daydream Believer",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003109,
                        "l": "BIYamawakiSkill06",
                        "n": "夢の際",
                        "c": 6,
                        "u": 10,
                        "e": [
                            [
                                "AllySingleWithoutSelf",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 46003110,
                        "l": "BIYamawakiSkill53",
                        "n": "醒めたる思い",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001119,
                        "l": "Passive.Start_Funnel02",
                        "n": "[Auto] 五月雨",
                        "s": 0,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001100,
                        "l": "Passive.Start_HealSpAcc05",
                        "n": "[Auto] 俊敏",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-02-16 02:00:00+00:00"
    },
    {
        "id": 32,
        "image": "SSakurabaIcon.webp",
        "w_image": "SSakurabaProfile.webp",
        "label": "SSakuraba",
        "name": "桜庭 星羅 — Seira Sakuraba — さくちゃん SakuChan",
        "ruby": "さくらば せいら",
        "team": "31C",
        "profile": {
            "cv": "田澤茉純",
            "vo": "",
            "bd": "6月29日",
            "bp": "長野",
            "hg": "171cm",
            "sc": "『星の導きがあらんことを』",
            "desc": "占星術で未来を視る占い師。よく恋愛占いを勧めてくる。\n占い道具である水晶がないと何も出来ない。\n落ち着いた物腰から告げられる言葉には不思議な説得力がある。\nなお、占いの的中率は53％。"
        },
        "cards": [
            {
                "id": 1003201,
                "image": "SSakurabaDefault_R1_Thumbnail.webp",
                "label": "SSakuraba01",
                "name": "クリスタルの導き",
                "role": "Healer",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46003204,
                        "l": "SSakurabaSkill03",
                        "n": "リカバー",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001005,
                        "l": "Passive.Condition_SpUp01",
                        "n": "[Auto] 決意",
                        "s": 5,
                        "c": "Sp()>=10 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003202,
                "image": "SSakurabaDefault_R2_Thumbnail.webp",
                "label": "SSakuraba02",
                "name": "雨模様、心そうそう",
                "role": "Defender",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46003203,
                        "l": "SSakurabaSkill02",
                        "n": "プロヴォーク",
                        "c": 7,
                        "u": 10,
                        "e": [
                            [
                                "Self",
                                "HealDp"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 3,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003203,
                "image": "SSakurabaDefault_R3_Thumbnail.webp",
                "label": "SSakuraba03",
                "name": "星の海、たゆたうフォーチュンテラー",
                "role": "Buffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "CriticalRateUp",
                    "n": "クリティカル率上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003202,
                        "l": "SSakurabaSkill01",
                        "n": "ポラリスの輝き",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    },
                    {
                        "i": 46003205,
                        "l": "SSakurabaSkill51",
                        "n": "星屑の航路",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "CriticalRateUp"
                            ]
                        ]
                    },
                    {
                        "i": 46003261,
                        "l": "SSakurabaSkill51Ev1",
                        "n": "星屑の航路+",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "CriticalRateUp"
                            ],
                            [
                                "AllyAll",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001035,
                        "l": "Passive.Turn_CriticalRateUp01",
                        "n": "[Auto] 星空",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003204,
                "image": "SSakurabaNewYear2023_R3_Thumbnail.webp",
                "label": "SSakuraba04",
                "name": "対決！！エア・ステージ",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003206,
                        "l": "SSakurabaSkill04",
                        "n": "コールドウェイヴ",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003207,
                        "l": "SSakurabaSkill52",
                        "n": "フローズン・スペクタクル",
                        "c": 9,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "Ice",
                                "AttackUp"
                            ],
                            [
                                "AllyAll",
                                "DefenseUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001033,
                        "l": "Passive.Turn_OverDriveUp01",
                        "n": "[Auto] 向上心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003205,
                "image": "SSakurabaDefault_R2a_Thumbnail.webp",
                "label": "SSakuraba05",
                "name": "今日のあなたの運勢は？",
                "role": "Defender",
                "tier": "S",
                "type": "Strike",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003208,
                        "l": "SSakurabaSkill05",
                        "n": "シャインテラー",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "AttackDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001034,
                        "l": "Passive.Turn_OverDrivePointUpRandom01",
                        "n": "[Auto] 福運",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUpRandom"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003206,
                "image": "SSakurabaBride_R3_Thumbnail.webp",
                "label": "SSakuraba06",
                "name": "Sanctuary Veil",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003209,
                        "l": "SSakurabaSkill06",
                        "n": "聖女の守護",
                        "c": 6,
                        "u": 4,
                        "e": [
                            [
                                "Self",
                                "BreakGuard"
                            ],
                            [
                                "All",
                                "Cover"
                            ]
                        ]
                    },
                    {
                        "i": 46003210,
                        "l": "SSakurabaSkill53",
                        "n": "花舞う、可憐のフレア",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackByOwnDpRate"
                            ],
                            [
                                "Self",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001137,
                        "l": "Passive.Start_GiveHealUp02",
                        "n": "[Auto] 薫風",
                        "s": 0,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveHealUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001136,
                        "l": "Passive.Condition_AttackUp04",
                        "n": "[Auto] 挺身",
                        "s": 3,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                8,
                211
            ],
            "dex": [
                8,
                209
            ],
            "spr": [
                8,
                209
            ],
            "luk": [
                8,
                212
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-06-14 02:00:00+00:00"
    },
    {
        "id": 33,
        "image": "MTenneIcon.webp",
        "w_image": "MTenneProfile.webp",
        "label": "MTenne",
        "name": "天音 巫呼 — Miko Tenne — 天然ちゃん TennenChan",
        "ruby": "てんね みこ",
        "team": "31C",
        "profile": {
            "cv": "宮崎珠子",
            "vo": "",
            "bd": "7月22日",
            "bp": "富山",
            "hg": "129cm",
            "sc": "『忘却は死、追憶に生きよ』",
            "desc": "不老不死を追い求め、色々な薬を作っている。\nその過程で生まれた様々な薬は、病を治し世界中に貢献してきた。\n自身を稀代の魔術師と自称している。\nダボダボのローブを羽織り、ロリっ子に見えるが本人は決して認めない。"
        },
        "cards": [
            {
                "id": 1003301,
                "image": "MTenneDefault_R1_Thumbnail.webp",
                "label": "MTenne01",
                "name": "悠久渇望の魔術師",
                "role": "Debuffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46003303,
                        "l": "MTenneSkill02",
                        "n": "ウィザードショット",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001031,
                        "l": "Passive.3Turn_CriticalRateUp01",
                        "n": "[Auto] 洞察",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003302,
                "image": "MTenneDefault_R2_Thumbnail.webp",
                "label": "MTenne02",
                "name": "夢浮橋辿る赤",
                "role": "Debuffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003302,
                        "l": "MTenneSkill01",
                        "n": "魔莢",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "StunRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003303,
                "image": "MTenneDefault_R3_Thumbnail.webp",
                "label": "MTenne03",
                "name": "エクスペリメンタルなキミ",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003304,
                        "l": "MTenneSkill03",
                        "n": "ルーンバースト",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    },
                    {
                        "i": 46003305,
                        "l": "MTenneSkill51",
                        "n": "デストロイ",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003304,
                "image": "MTenneAnimal_R3_Thumbnail.webp",
                "label": "MTenne04",
                "name": "山脇様の手下：マジカルにゃん",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003306,
                        "l": "MTenneSkill04",
                        "n": "衝撃零度",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003307,
                        "l": "MTenneSkill52",
                        "n": "にゃんこ大魔法",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Ice",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001090,
                        "l": "Passive.Start_GiveDefenseDebuffUp01",
                        "n": "[Auto] 侵食",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003305,
                "image": "MTenneWizard_R3_Thumbnail.webp",
                "label": "MTenne05",
                "name": "至高のひととき",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003308,
                        "l": "MTenneSkill05",
                        "n": "奇跡の療術",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllySingle",
                                "HealDp"
                            ]
                        ]
                    },
                    {
                        "i": 46003309,
                        "l": "MTenneSkill53",
                        "n": "ウィッチ・オブ・カーマイン",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "DefenseDown"
                            ],
                            [
                                "Single",
                                "Fragile"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001122,
                        "l": "Passive.Start_AdditionalTurn_ReduceSp01",
                        "n": "[Auto] クイックリキャスト",
                        "s": 3,
                        "c": "",
                        "t": "OnAdditionalTurnStart",
                        "e": [
                            [
                                "Self",
                                "ReduceSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                9,
                213
            ],
            "spr": [
                8,
                208
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                208
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-03-08 02:00:00+00:00"
    },
    {
        "id": 34,
        "image": "YBungoIcon.webp",
        "w_image": "YBungoProfile.webp",
        "label": "YBungo",
        "name": "豊後 弥生 — Yayoi Bungo — ぶんちゃん BunChan",
        "ruby": "ぶんご やよい",
        "team": "31C",
        "profile": {
            "cv": "白花恋香",
            "vo": "",
            "bd": "4月1日",
            "bp": "熊本",
            "hg": "121cm",
            "sc": "『世界征服開始でゲス！』",
            "desc": "マッドサイエンティスト山脇のしもべで、一緒に世界征服を企む少女。\n体は小さく、精神年齢は低いが、運動能力だけは抜群。キャンサーとも充分に渡り合える。\n語尾が「ゲス」。\n好戦的なセリフばかり吐くが、なぜだかα波を引き起こす癒やし系キャラである。"
        },
        "cards": [
            {
                "id": 1003401,
                "image": "YBungoDefault_R1_Thumbnail.webp",
                "label": "YBungo01",
                "name": "カニ手の使い魔",
                "role": "Breaker",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46003402,
                        "l": "YBungoSkill01",
                        "n": "クラッカー",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 5,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003402,
                "image": "YBungoDefault_R2_Thumbnail.webp",
                "label": "YBungo02",
                "name": "手のひらのパーフェクション",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003403,
                        "l": "YBungoSkill02",
                        "n": "プレッツェル",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001034,
                        "l": "Passive.Turn_OverDrivePointUpRandom01",
                        "n": "[Auto] 福運",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUpRandom"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003403,
                "image": "YBungoDefault_R3_Thumbnail.webp",
                "label": "YBungo03",
                "name": "夜空のShining Star",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003404,
                        "l": "YBungoSkill03",
                        "n": "ビスコッティ",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Ice",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46003408,
                        "l": "YBungoSkill51",
                        "n": "トリック・オア・トリート",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "SkillRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001019,
                        "l": "Passive.Turn_Rate30_AttackUp01",
                        "n": "[Auto] 野生の勘",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003404,
                "image": "YBungoXmas2022_R3_Thumbnail.webp",
                "label": "YBungo04",
                "name": "Happy Legion",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003405,
                        "l": "YBungoSkill04",
                        "n": "スターマイン",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003411,
                        "l": "YBungoSkill52",
                        "n": "セイクリッド・クワイア",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001083,
                        "l": "Passive.Start_LightEnhance03",
                        "n": "[Auto] 光の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001078,
                        "l": "Passive.Start_LightEnhance02",
                        "n": "[Auto] 光の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003405,
                "image": "YBungoDango_R3_Thumbnail.webp",
                "label": "YBungo05",
                "name": "お花見怪人クシダンゴ",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003414,
                        "l": "YBungoSkill05",
                        "n": "ー◯◯◯",
                        "c": 8,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "SkillRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46003417,
                        "l": "YBungoSkill53",
                        "n": "三色団子乱れ撃ち",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001100,
                        "l": "Passive.Start_HealSpAcc05",
                        "n": "[Auto] 俊敏",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                7,
                205
            ],
            "dex": [
                9,
                214
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                9,
                213
            ],
            "con": [
                8,
                209
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-03-08 02:00:00+00:00"
    },
    {
        "id": 35,
        "image": "AKanzakiIcon.webp",
        "w_image": "AKanzakiProfile.webp",
        "label": "AKanzaki",
        "name": "神崎 アーデルハイド — Adelheid Kanzaki — アーさん AaSan",
        "ruby": "かんざき アーデルハイド",
        "team": "31C",
        "profile": {
            "cv": "稗田寧々",
            "vo": "",
            "bd": "2月22日",
            "bp": "ドイツ・ベルリン",
            "hg": "160cm",
            "sc": "『イッツニンジャショータイム！』",
            "desc": "ドイツからやって来た、目立ちたがり屋の忍ばない忍者。\n忍者への強い憧れから独学で猛特訓して忍術を会得。\n基地の至るとこで忍術を披露している。\n一定以上注目され続けると、言語中枢が乱れて興奮し始める。"
        },
        "cards": [
            {
                "id": 1003501,
                "image": "AKanzakiDefault_R1_Thumbnail.webp",
                "label": "AKanzaki01",
                "name": "碧落の忍び",
                "role": "Blaster",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46003502,
                        "l": "AKanzakiSkill01",
                        "n": "旋風",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003502,
                "image": "AKanzakiDefault_R2_Thumbnail.webp",
                "label": "AKanzaki02",
                "name": "微光の兆し",
                "role": "Blaster",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003504,
                        "l": "AKanzakiSkill03",
                        "n": "心意活性",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001052,
                        "l": "Passive.Start_IceEnhance01",
                        "n": "[Auto] 氷の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003503,
                "image": "AKanzakiDefault_R3_Thumbnail.webp",
                "label": "AKanzaki03",
                "name": "ごちゃまぜ忍法大乱闘",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003503,
                        "l": "AKanzakiSkill02",
                        "n": "一片氷心",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003506,
                        "l": "AKanzakiSkill51",
                        "n": "滅殺影分身",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "ConfusionRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46003561,
                        "l": "AKanzakiSkill51Ev1",
                        "n": "滅殺影分身+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "ShadowClone"
                            ],
                            [
                                "All",
                                "ConfusionRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001057,
                        "l": "Passive.Condition_AttackUp03",
                        "n": "[Auto] 壮烈",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003504,
                "image": "AKanzakiAgent_R3_Thumbnail.webp",
                "label": "AKanzaki04",
                "name": "氷花のHexerei",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003505,
                        "l": "AKanzakiSkill04",
                        "n": "淡雪",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46003507,
                        "l": "AKanzakiSkill52",
                        "n": "神崎流忍術・氷塵",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "DamageRateChangeAttackSkill"
                            ],
                            [
                                "Single",
                                "ImprisonRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001074,
                        "l": "Passive.Start_DamageRateBuffUp01",
                        "n": "[Auto] 鮮烈",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "DamageRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003505,
                "image": "AKanzakiDirndl_R3_Thumbnail.webp",
                "label": "AKanzaki05",
                "name": "少女の休息",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003508,
                        "l": "AKanzakiSkill05",
                        "n": "寝ても醒めても",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003509,
                        "l": "AKanzakiSkill53",
                        "n": "神崎流忍術・散華",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "DamageRateChangeAttackSkill"
                            ],
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001094,
                        "l": "Passive.Start_DarkEnhance03",
                        "n": "[Auto] 闇の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001075,
                        "l": "Passive.Start_DarkEnhance02",
                        "n": "[Auto] 闇の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003506,
                "image": "AKanzakiSwim2024_R3_Thumbnail.webp",
                "label": "AKanzaki06",
                "name": "向日葵",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003510,
                        "l": "AKanzakiSkill54",
                        "n": "レッドラウンドイリュージョン",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "SkillCondition"
                            ]
                        ]
                    },
                    {
                        "i": 46003511,
                        "l": "AKanzakiSkill06",
                        "n": "真夏のパッション",
                        "c": 8,
                        "u": 2,
                        "e": [
                            [
                                "Self",
                                "ShadowClone"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001141,
                        "l": "Passive.Start_ShadowClone",
                        "n": "[Auto] 忍法・影分身！",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "ShadowClone"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001074,
                        "l": "Passive.Start_DamageRateBuffUp01",
                        "n": "[Auto] 鮮烈",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "DamageRateUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-07-05 02:00:00+00:00"
    },
    {
        "id": 36,
        "image": "MSatsukiIcon.webp",
        "w_image": "MSatsukiProfile.webp",
        "label": "MSatsuki",
        "name": "佐月 マリ — Mari Satsuki — マリー Marii",
        "ruby": "さつき マリ",
        "team": "31C",
        "profile": {
            "cv": "宮本侑芽",
            "vo": "",
            "bd": "2月7日",
            "bp": "三重",
            "hg": "150cm",
            "sc": "『全滅のご注文承りました』",
            "desc": "基地のすべてのショップに務めるスーパー店員。ひとりではなく、複数居るのでは？と思われるほど。\nしかも戦っても強い。\n男兄弟の中で育ったため、たまに言動が粗暴になる。\n３１Ｃの精神的支柱になりたいと日々頑張っている。"
        },
        "cards": [
            {
                "id": 1003601,
                "image": "MSatsukiDefault_R1_Thumbnail.webp",
                "label": "MSatsuki01",
                "name": "ビジネスとスマイル",
                "role": "Buffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46003603,
                        "l": "MSatsukiSkill02",
                        "n": "エンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001028,
                        "l": "Passive.Condition_Dp50Less_DpUp01",
                        "n": "[Auto] 気合",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003602,
                "image": "MSatsukiNewYear2023_R2_Thumbnail.webp",
                "label": "MSatsuki02",
                "name": "はにかむ、心かき集め",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003606,
                        "l": "MSatsukiSkill04",
                        "n": "フィルエンハンス",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001077,
                        "l": "Passive.Start_StabEnhance01",
                        "n": "[Auto] 突の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003603,
                "image": "MSatsukiDefault_R3_Thumbnail.webp",
                "label": "MSatsuki03",
                "name": "甘美のMuzzle",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003604,
                        "l": "MSatsukiSkill03",
                        "n": "ゲインカノン",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46003605,
                        "l": "MSatsukiSkill51",
                        "n": "ダイヤモンド・ダスト",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "Field",
                                "Ice",
                                "Zone"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001008,
                        "l": "Passive.Start_FieldEffectIce01",
                        "n": "[Auto] 凍れる陣",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Field",
                                "Ice",
                                "Zone"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003604,
                "image": "MSatsukiAgent_R3_Thumbnail.webp",
                "label": "MSatsuki04",
                "name": "アサシン忍法大繁盛",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46003607,
                        "l": "MSatsukiSkill05",
                        "n": "バラ撒き",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003608,
                        "l": "MSatsukiSkill52",
                        "n": "ルーイン・イリュージョン",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "AllyFront",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001069,
                        "l": "Passive.Start_GiveAttackBuffUp01",
                        "n": "[Auto] 気転",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003605,
                "image": "MSatsukiBride_R3_Thumbnail.webp",
                "label": "MSatsuki05",
                "name": "Crying Tears",
                "role": "Attacker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003611,
                        "l": "MSatsukiSkill06",
                        "n": "別れの朝",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46003612,
                        "l": "MSatsukiSkill53",
                        "n": "次の主役はあなた",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001091,
                        "l": "Passive.Start_IceEnhance03",
                        "n": "[Auto] 氷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001070,
                        "l": "Passive.Start_IceEnhance02",
                        "n": "[Auto] 氷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1003606,
                "image": "MSatsukiSwim2024_R3_Thumbnail.webp",
                "label": "MSatsuki06",
                "name": "ハイアー・アズ・ザ・サン",
                "role": "Attacker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46003615,
                        "l": "MSatsukiSkill07",
                        "n": "蜃気楼",
                        "c": 8,
                        "u": 2,
                        "e": [
                            [
                                "Self",
                                "ShadowClone"
                            ]
                        ]
                    },
                    {
                        "i": 46003616,
                        "l": "MSatsukiSkill54",
                        "n": "浮き浮きサニー・ボマー",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001142,
                        "l": "Passive.Start_ShadowClone02",
                        "n": "[Auto] ショップ店員の嗜み",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "ShadowClone"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001100,
                        "l": "Passive.Start_HealSpAcc05",
                        "n": "[Auto] 俊敏",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                8,
                212
            ],
            "spr": [
                8,
                209
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-07-05 02:00:00+00:00"
    },
    {
        "id": 41,
        "image": "YShirakawaIcon.webp",
        "w_image": "YShirakawaProfile.webp",
        "label": "YShirakawa",
        "name": "白河 ユイナ — Yuina Shirakawa — ユイナ先輩 YuinaSenpai",
        "ruby": "しらかわ ユイナ",
        "team": "30G",
        "profile": {
            "cv": "花守ゆみり",
            "vo": "",
            "bd": "1月6日",
            "bp": "不明",
            "hg": "164cm",
            "sc": "『ノブレス・オブリージュ』",
            "desc": "仲間からの信頼が厚く、頼られる存在。\n真面目で誠実だが、親しみやすさも兼ね備えている。\n思いもよらないことを言われるとうろたえてしまう可愛いらしい一面を持つ。\n茅森の相談に乗り続けることにより、それがどんどん引き出されていく。"
        },
        "cards": [
            {
                "id": 1004101,
                "image": "YShirakawaDefault_R1_Thumbnail.webp",
                "label": "YShirakawa01",
                "name": "Ally",
                "role": "Attacker",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46004102,
                        "l": "YShirakawaSkill01",
                        "n": "ブレイブソード",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004102,
                "image": "YShirakawaDefault_R2_Thumbnail.webp",
                "label": "YShirakawa02",
                "name": "Sign",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004105,
                        "l": "YShirakawaSkill04",
                        "n": "導きの号令",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004103,
                "image": "YShirakawaDefault_R3_Thumbnail.webp",
                "label": "YShirakawa03",
                "name": "Awakening Iris",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004104,
                        "l": "YShirakawaSkill03",
                        "n": "粛正",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46004106,
                        "l": "YShirakawaSkill51",
                        "n": "セイントフォール",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001016,
                        "l": "Passive.Turn_AttackUpAll01",
                        "n": "[Auto] 英雄の凱歌",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004104,
                "image": "YShirakawaBloom_R3_Thumbnail.webp",
                "label": "YShirakawa04",
                "name": "Infernal Sanctuary",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004103,
                        "l": "YShirakawaSkill02",
                        "n": "雷鳴",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46004107,
                        "l": "YShirakawaSkill52",
                        "n": "ライトニングジャッジメント",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001064,
                        "l": "Passive.Start_ThunderEnhance02",
                        "n": "[Auto] 雷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004105,
                "image": "YShirakawaDefault_R2a_Thumbnail.webp",
                "label": "YShirakawa05",
                "name": "君がいるだけで",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004108,
                        "l": "YShirakawaSkill05",
                        "n": "ブレイブソウル",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004106,
                "image": "YShirakawaSwim2023_R3_Thumbnail.webp",
                "label": "YShirakawa06",
                "name": "真夏のジャンダルム",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004109,
                        "l": "YShirakawaSkill06",
                        "n": "赤面スティグマ",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    },
                    {
                        "i": 46004110,
                        "l": "YShirakawaSkill53",
                        "n": "シーサイドベルセルク",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001094,
                        "l": "Passive.Start_DarkEnhance03",
                        "n": "[Auto] 闇の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001075,
                        "l": "Passive.Start_DarkEnhance02",
                        "n": "[Auto] 闇の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004107,
                "image": "YShirakawaSocial_R3_Thumbnail.webp",
                "label": "YShirakawa07",
                "name": "月が綺麗",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004113,
                        "l": "YShirakawaSkill54",
                        "n": "蒼焔ノ迷宮",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "SkillSwitch"
                            ]
                        ]
                    },
                    {
                        "i": 46004118,
                        "l": "YShirakawaSkill07",
                        "n": "夜醒",
                        "c": 7,
                        "u": 4,
                        "e": [
                            [
                                "AllyFront",
                                "AdditionalTurn"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001091,
                        "l": "Passive.Start_IceEnhance03",
                        "n": "[Auto] 氷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 0,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001145,
                        "l": "Passive.Start_AdditionalTurn_ReduceSp02",
                        "n": "[Auto] 優美なる剣舞",
                        "s": 3,
                        "c": "",
                        "t": "OnAdditionalTurnStart",
                        "e": [
                            [
                                "Self",
                                "ReduceSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                8,
                211
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-06-28 02:00:00+00:00"
    },
    {
        "id": 42,
        "image": "MTsukishiroIcon.webp",
        "w_image": "MTsukishiroProfile.webp",
        "label": "MTsukishiro",
        "name": "月城 最中 — Monaka Tsukishiro — もなにゃん Monanyan",
        "ruby": "つきしろ もなか",
        "team": "30G",
        "profile": {
            "cv": "松本沙羅",
            "vo": "",
            "bd": "12月1日",
            "bp": "鹿児島",
            "hg": "170cm",
            "sc": "『風林火山』",
            "desc": "現役セラフ部隊で最強と呼ばれる戦士。\n武士のような佇まいで、強者の貫禄がある。\n飲み物や汁ものを作るのが得意。\nかつての戦いで失った親友とふたりでカフェを開くことが夢だった。"
        },
        "cards": [
            {
                "id": 1004201,
                "image": "MTsukishiroDefault_R1_Thumbnail.webp",
                "label": "MTsukishiro01",
                "name": "禅定、憂い無し",
                "role": "Attacker",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46004202,
                        "l": "MTsukishiroSkill01",
                        "n": "断",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "TokenSet"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001037,
                        "l": "Passive.Token_DefenceUp01",
                        "n": "[Auto] 鉄壁",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUpPerToken"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004202,
                "image": "MTsukishiroDefault_R2_Thumbnail.webp",
                "label": "MTsukishiro02",
                "name": "黄昏、久遠の夢",
                "role": "Attacker",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004204,
                        "l": "MTsukishiroSkill03",
                        "n": "空",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "TokenSet"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001037,
                        "l": "Passive.Token_DefenceUp01",
                        "n": "[Auto] 鉄壁",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUpPerToken"
                            ]
                        ]
                    },
                    {
                        "i": 57001055,
                        "l": "Passive.Start_LightEnhance01",
                        "n": "[Auto] 光の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004203,
                "image": "MTsukishiroDefault_R3_Thumbnail.webp",
                "label": "MTsukishiro03",
                "name": "真宵晴るれば、一閃心静",
                "role": "Attacker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004205,
                        "l": "MTsukishiroSkill04",
                        "n": "烈",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46004206,
                        "l": "MTsukishiroSkill51",
                        "n": "羅刹",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "TokenAttack"
                            ],
                            [
                                "All",
                                "TokenChangeTimeline"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001038,
                        "l": "Passive.Token_AttackUp01",
                        "n": "[Auto] 高揚",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUpPerToken"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004204,
                "image": "MTsukishiroRugged_R3_Thumbnail.webp",
                "label": "MTsukishiro04",
                "name": "掩蔽された暇",
                "role": "Attacker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004207,
                        "l": "MTsukishiroSkill05",
                        "n": "朧",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "TokenSet"
                            ]
                        ]
                    },
                    {
                        "i": 46004208,
                        "l": "MTsukishiroSkill52",
                        "n": "輝神",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001101,
                        "l": "Passive.Start_TokenSetByAttacking",
                        "n": "[Auto] 戦勲",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "TokenSetByAttacking"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001078,
                        "l": "Passive.Start_LightEnhance02",
                        "n": "[Auto] 光の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "MC04_00",
                "end": "MC04B_08"
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-11-03 02:00:00+00:00"
    },
    {
        "id": 43,
        "image": "MKiryuIcon.webp",
        "w_image": "MKiryuProfile.webp",
        "label": "MKiryu",
        "name": "桐生 美也 — Miya Kiryu — みゃーさん MyaaSan",
        "ruby": "きりゅう みや",
        "team": "30G",
        "profile": {
            "cv": "大西亜玖璃",
            "vo": "",
            "bd": "1月5日",
            "bp": "京都",
            "hg": "156cm",
            "sc": "『鳴らせ退魔の弦！』",
            "desc": "弓道の才に恵まれ「百年にひとりの逸材」として日本代表に選ばれたこともあった。\n日本の伝統文化を愛するあまり、「日本伝統文化保存同好会」を立ち上げ、精力的に活動するようになったが、未だ会員は自分ひとり。\n和服を羽織ったり、お面をつけていたりと非常に個性的な外見をしている。\n普段は丁寧で物腰柔らかだが、テンションがあがると非常にグイグイくるタイプ。"
        },
        "cards": [
            {
                "id": 1004301,
                "image": "MKiryuDefault_R1_Thumbnail.webp",
                "label": "MKiryu01",
                "name": "幽幻閑寂いとらうたし",
                "role": "Debuffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46004302,
                        "l": "MKiryuSkill01",
                        "n": "呪怨の矢",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Fragile"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001030,
                        "l": "Passive.Start_OverDriveUp01",
                        "n": "[Auto] 咆吼",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004302,
                "image": "MKiryuDefault_R2_Thumbnail.webp",
                "label": "MKiryu02",
                "name": "神祠見舞う儚さかな",
                "role": "Debuffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46004303,
                        "l": "MKiryuSkill02",
                        "n": "薙の矢",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Fragile"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 3,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004303,
                "image": "MKiryuDefault_R3_Thumbnail.webp",
                "label": "MKiryu03",
                "name": "星林遣らずの雨",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46004304,
                        "l": "MKiryuSkill03",
                        "n": "神妙",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Misfortune"
                            ]
                        ]
                    },
                    {
                        "i": 46004305,
                        "l": "MKiryuSkill51",
                        "n": "光芒一閃",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "Field",
                                "Light",
                                "Zone"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001065,
                        "l": "Passive.Start_MisfortuneAll01",
                        "n": "[Auto] 厄災",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "All",
                                "Misfortune"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004304,
                "image": "MKiryuGothic_R3_Thumbnail.webp",
                "label": "MKiryu04",
                "name": "豊楽ノ神秘",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46004306,
                        "l": "MKiryuSkill04",
                        "n": "天変の相",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Misfortune"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    },
                    {
                        "i": 46004307,
                        "l": "MKiryuSkill52",
                        "n": "御稲荷神話",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ],
                            [
                                "Single",
                                "Fragile"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001090,
                        "l": "Passive.Start_GiveDefenseDebuffUp01",
                        "n": "[Auto] 侵食",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004305,
                "image": "MKiryuCerulean_R3_Thumbnail.webp",
                "label": "MKiryu05",
                "name": "たまゆら、一夜の夢火",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46004308,
                        "l": "MKiryuSkill05",
                        "n": "ひらり落桜",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "ArrowCherryBlossoms"
                            ]
                        ]
                    },
                    {
                        "i": 46004309,
                        "l": "MKiryuSkill53",
                        "n": "氷華、千射万箭",
                        "c": 15,
                        "u": 1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Ice",
                                "DefenseDown"
                            ],
                            [
                                "All",
                                "DefenseDown"
                            ],
                            [
                                "All",
                                "HealDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001125,
                        "l": "Passive.Start_GiveDefenseDebuffUp02",
                        "n": "[Auto] 減退",
                        "s": 0,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001130,
                        "l": "Passive.Start_ArrowCherryBlossoms01",
                        "n": "[Auto] 徒桜の一矢",
                        "s": 3,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "ArrowCherryBlossoms"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                211
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                9,
                213
            ],
            "luk": [
                8,
                209
            ],
            "con": [
                7,
                206
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-04-26 02:00:00+00:00"
    },
    {
        "id": 44,
        "image": "CSugaharaIcon.webp",
        "w_image": "CSugaharaProfile.webp",
        "label": "CSugahara",
        "name": "菅原 千恵 — Chie Sugawara — 菅やん Sugayan",
        "ruby": "すがわら ちえ",
        "team": "30G",
        "profile": {
            "cv": "根本京里",
            "vo": "",
            "bd": "12月25日",
            "bp": "群馬",
            "hg": "152cm",
            "sc": "『カワイイは最強ですわ』",
            "desc": "顔つきと口調がコロコロ変わる。\n穏やかなときは上品だが、キレると非常に狂暴。\nロリータ服を愛し、日々仲間を増やそうとしている。\n同部隊の桐生とは、ひとつの文化を愛する同士として、気が合う。"
        },
        "cards": [
            {
                "id": 1004401,
                "image": "CSugaharaDefault_R1_Thumbnail.webp",
                "label": "CSugahara01",
                "name": "ドロレスの魅惑",
                "role": "Healer",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46004403,
                        "l": "CSugaharaSkill02",
                        "n": "リカバー",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001023,
                        "l": "Passive.3Turn_DefenceUp01",
                        "n": "[Auto] 警衛",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004402,
                "image": "CSugaharaDefault_R2_Thumbnail.webp",
                "label": "CSugahara02",
                "name": "気まぐれのアンニュイ",
                "role": "Healer",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46004404,
                        "l": "CSugaharaSkill03",
                        "n": "ブリリアント・グローリー",
                        "c": 7,
                        "u": 10,
                        "e": [
                            [
                                "Self",
                                "HealDp"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004403,
                "image": "CSugaharaDefault_R3_Thumbnail.webp",
                "label": "CSugahara03",
                "name": "終末ロリータ白書",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46004405,
                        "l": "CSugaharaSkill04",
                        "n": "ディミニッシュ・レイ",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "AttackDown"
                            ]
                        ]
                    },
                    {
                        "i": 46004406,
                        "l": "CSugaharaSkill51",
                        "n": "イノセントワイルド",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    },
                    {
                        "i": 46004461,
                        "l": "CSugaharaSkill51Ev1",
                        "n": "イノセントワイルド+",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Provoke"
                            ],
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001018,
                        "l": "Passive.Turn_HealAll01",
                        "n": "[Auto] 博愛の心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyFront",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004404,
                "image": "CSugaharaPurity_R3_Thumbnail.webp",
                "label": "CSugahara04",
                "name": "亡国の純心",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46004402,
                        "l": "CSugaharaSkill01",
                        "n": "籠の鳥",
                        "c": 3,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "ToughnessUpValue"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    },
                    {
                        "i": 46004407,
                        "l": "CSugaharaSkill52",
                        "n": "姫君の寵愛",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001085,
                        "l": "Passive.Condition_Provoke01",
                        "n": "[Auto] 鋭気",
                        "s": 3,
                        "c": "IsFront()&&CountBC(IsPlayer()==0&&IsDead()==0&&SpecialStatusCountByType(12)>0)>0||CountBC(IsPlayer()==0&&IsDead()==0&&SpecialStatusCountByType(57)>0)>0",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004405,
                "image": "CSugaharaDefault_R2a_Thumbnail.webp",
                "label": "CSugahara05",
                "name": "センパイの品格",
                "role": "Healer",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46004410,
                        "l": "CSugaharaSkill05",
                        "n": "フィルリカバー",
                        "c": 8,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001102,
                        "l": "Passive.Turn_LightCriticalDamageUp01",
                        "n": "[Auto] 光の躍動",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Light",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004406,
                "image": "CSugaharaExcellency_R3_Thumbnail.webp",
                "label": "CSugahara06",
                "name": "ロリータ・ストイック",
                "role": "Buffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46004411,
                        "l": "CSugaharaSkill06",
                        "n": "おしおき",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    },
                    {
                        "i": 46004412,
                        "l": "CSugaharaSkill53",
                        "n": "ロリータフルバースト",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "AllyAll",
                                "Ice",
                                "AttackUp"
                            ],
                            [
                                "AllyAll",
                                "Ice",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001128,
                        "l": "Passive.Turn_DefenceUp02",
                        "n": "[Auto] ゾルダート",
                        "s": 0,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001129,
                        "l": "Passive.Start_AdditionalTurn_GiveAttackBuffUp01",
                        "n": "[Auto] エクシード",
                        "s": 3,
                        "c": "",
                        "t": "OnAdditionalTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                9,
                213
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-04-26 02:00:00+00:00"
    },
    {
        "id": 45,
        "image": "HOgasawaraIcon.webp",
        "w_image": "HOgasawaraProfile.webp",
        "label": "HOgasawara",
        "name": "小笠原 緋雨 — Hisame Ogasahara — 緋雨っち Hisamecchi",
        "ruby": "おがさはら ひさめ",
        "team": "30G",
        "profile": {
            "cv": "田中美海",
            "vo": "",
            "bd": "3月21日",
            "bp": "千葉",
            "hg": "138cm",
            "sc": "『寄らば斬る！』",
            "desc": "剣の道に生きる３０Ｇ部隊最年少の少女。孤高の剣士を気取る。\n自分が年下なのを気にしていて、ことあるごとに先輩風を吹かすところがある。\n３分以上戦えないという設定を自分に課しているおかしな子。\n剣術以外のことで褒められ慣れていないので、すぐにテンパる。"
        },
        "cards": [
            {
                "id": 1004501,
                "image": "HOgasawaraDefault_R1_Thumbnail.webp",
                "label": "HOgasawara01",
                "name": "仄かに揺らぐファイア",
                "role": "Breaker",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46004502,
                        "l": "HOgasawaraSkill01",
                        "n": "朧月",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001031,
                        "l": "Passive.3Turn_CriticalRateUp01",
                        "n": "[Auto] 洞察",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004502,
                "image": "HOgasawaraDefault_R2_Thumbnail.webp",
                "label": "HOgasawara02",
                "name": "静寂閑雅のレスト",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004504,
                        "l": "HOgasawaraSkill03",
                        "n": "渾身銃撃",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001036,
                        "l": "Passive.Overdrive_AttackUp02",
                        "n": "[Auto] 専心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnOverdriveStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004503,
                "image": "HOgasawaraDefault_R3_Thumbnail.webp",
                "label": "HOgasawara03",
                "name": "朧月夜のバレット",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004505,
                        "l": "HOgasawaraSkill04",
                        "n": "夜雨",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Light",
                                "DefenseDown"
                            ],
                            [
                                "Single",
                                "Dark",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46004506,
                        "l": "HOgasawaraSkill51",
                        "n": "三日月宗近",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46004561,
                        "l": "HOgasawaraSkill51Ev1",
                        "n": "三日月宗近+",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004504,
                "image": "HOgasawaraCutieMaid_R3_Thumbnail.webp",
                "label": "HOgasawara04",
                "name": "萌えよ天才剣士",
                "role": "Attacker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004503,
                        "l": "HOgasawaraSkill02",
                        "n": "メイドの嗜み",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "BuffCharge"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    },
                    {
                        "i": 46004507,
                        "l": "HOgasawaraSkill52",
                        "n": "メイド・イン・パンクチュア",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001075,
                        "l": "Passive.Start_DarkEnhance02",
                        "n": "[Auto] 闇の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004505,
                "image": "HOgasawaraNightdress_R3_Thumbnail.webp",
                "label": "HOgasawara05",
                "name": "希求と渇仰",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004510,
                        "l": "HOgasawaraSkill05",
                        "n": "とある衝撃",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "Thunder",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    },
                    {
                        "i": 46004511,
                        "l": "HOgasawaraSkill53",
                        "n": "夢視るデザイア",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "AllyAll",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001100,
                        "l": "Passive.Start_HealSpAcc05",
                        "n": "[Auto] 俊敏",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004506,
                "image": "HOgasawaraDefault_R2a_Thumbnail.webp",
                "label": "HOgasawara06",
                "name": "早暁の剣光",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004512,
                        "l": "HOgasawaraSkill06",
                        "n": "朝霜",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001052,
                        "l": "Passive.Start_IceEnhance01",
                        "n": "[Auto] 氷の意志",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001118,
                        "l": "Passive.Start_IceEnhance04",
                        "n": "[Auto] 氷の采配",
                        "s": 10,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                9,
                213
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                209
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-04-26 02:00:00+00:00"
    },
    {
        "id": 46,
        "image": "SKuraIcon.webp",
        "w_image": "SKuraProfile.webp",
        "label": "SKura",
        "name": "蔵 里見 — Satomi Kura — 蔵っち Kuracchi",
        "ruby": "くら さとみ",
        "team": "30G",
        "profile": {
            "cv": "井澤美香子",
            "vo": "",
            "bd": "6月18日",
            "bp": "秋田",
            "hg": "172cm",
            "sc": "『五穀豊穣、刈り入れ時だね！』",
            "desc": "お米に対して尋常ならざる愛着と技術を持っている。\nトロピカル巻きやノスタルジックにぎりなるグルメを生み出し、基地内でも人気を博している。\n月城の戦いのサポート役を買って出ている。\n余裕たっぷりを装っているが、茅森に関わると、翻弄されまくり、キャラすらもぶれる。"
        },
        "cards": [
            {
                "id": 1004601,
                "image": "SKuraDefault_R1_Thumbnail.webp",
                "label": "SKura01",
                "name": "きおい佳人",
                "role": "Blaster",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46004602,
                        "l": "SKuraSkill01",
                        "n": "斜陽",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 5,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004602,
                "image": "SKuraDefault_R2_Thumbnail.webp",
                "label": "SKura02",
                "name": "清流に坐す",
                "role": "Blaster",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004605,
                        "l": "SKuraSkill04",
                        "n": "地獄変",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004603,
                "image": "SKuraDefault_R3_Thumbnail.webp",
                "label": "SKura03",
                "name": "此に期するは豊穣の御霊",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004603,
                        "l": "SKuraSkill02",
                        "n": "夢十夜",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46004606,
                        "l": "SKuraSkill51",
                        "n": "収穫祭",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001050,
                        "l": "Passive.Start_FieldEffectLight01",
                        "n": "[Auto] 栄光の陣",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Field",
                                "Light",
                                "Zone"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004604,
                "image": "SKuraDefault_R2a_Thumbnail.webp",
                "label": "SKura04",
                "name": "夜警の空",
                "role": "Blaster",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004604,
                        "l": "SKuraSkill03",
                        "n": "細雪",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "AdditionalTurn"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001066,
                        "l": "Passive.Start_SlashEnhance01",
                        "n": "[Auto] 斬の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1004605,
                "image": "SKuraLandlady_R3_Thumbnail.webp",
                "label": "SKura05",
                "name": "若女将の日々",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46004607,
                        "l": "SKuraSkill05",
                        "n": "大切り盛り",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46004608,
                        "l": "SKuraSkill52",
                        "n": "最凶のおもてなし",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "DamageRateChangeAttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001075,
                        "l": "Passive.Start_DarkEnhance02",
                        "n": "[Auto] 闇の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "MC04_00",
                "end": ""
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                8,
                210
            ],
            "dex": [
                8,
                209
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                7,
                207
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-04-28 02:00:00+00:00"
    },
    {
        "id": 51,
        "image": "MNikaidoIcon.webp",
        "w_image": "MNikaidoProfile.webp",
        "label": "MNikaido",
        "name": "二階堂 三郷 — Misato Nikaido — みさりん Misarin",
        "ruby": "にかいどう みさと",
        "team": "31D",
        "profile": {
            "cv": "奈波果林",
            "vo": "",
            "bd": "6月6日",
            "bp": "奈良",
            "hg": "163cm",
            "sc": "『天元、取ったり』",
            "desc": "囲碁の天才棋士で前代未聞の５０連勝を成した最年少名人にして、未来の棋聖と期待されている。\n\"天才\"と呼ばれた棋士だった祖父のことを強く尊敬している。\n威厳のある言動を心がけているが、勝負に勝ったり好きな食べ物を前にしたりすると少女らしい顔を見せる。\n褒められ慣れていないのか、割と照れやすい。"
        },
        "cards": [
            {
                "id": 1005101,
                "image": "MNikaidoDefault_R1_Thumbnail.webp",
                "label": "MNikaido01",
                "name": "最年少名人",
                "role": "Attacker",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46005102,
                        "l": "MNikaidoSkill01",
                        "n": "ハネ殺し",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005102,
                "image": "MNikaidoDefault_R2_Thumbnail.webp",
                "label": "MNikaido02",
                "name": "今昔の感、想いは往きて",
                "role": "Attacker",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005103,
                        "l": "MNikaidoSkill02",
                        "n": "クールダウン",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005103,
                "image": "MNikaidoDefault_R3_Thumbnail.webp",
                "label": "MNikaido03",
                "name": "無上の終局",
                "role": "Attacker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005105,
                        "l": "MNikaidoSkill04",
                        "n": "極点の一手",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "AttackDown"
                            ]
                        ]
                    },
                    {
                        "i": 46005106,
                        "l": "MNikaidoSkill51",
                        "n": "石塔の手筋",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    },
                    {
                        "i": 46005161,
                        "l": "MNikaidoSkill51Ev1",
                        "n": "石塔の手筋+",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001036,
                        "l": "Passive.Overdrive_AttackUp02",
                        "n": "[Auto] 専心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnOverdriveStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005104,
                "image": "MNikaidoXmas2023_R3_Thumbnail.webp",
                "label": "MNikaido04",
                "name": "Holiday Ring a Bell",
                "role": "Attacker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005109,
                        "l": "MNikaidoSkill05",
                        "n": "北風のスバル",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46005110,
                        "l": "MNikaidoSkill52",
                        "n": "フローズン・ワルツ",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001091,
                        "l": "Passive.Start_IceEnhance03",
                        "n": "[Auto] 氷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001070,
                        "l": "Passive.Start_IceEnhance02",
                        "n": "[Auto] 氷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005105,
                "image": "MNikaidoDefault_R2a_Thumbnail.webp",
                "label": "MNikaido05",
                "name": "スイート・メロウタイム",
                "role": "Attacker",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005113,
                        "l": "MNikaidoSkill06",
                        "n": "スイーツチャージ！",
                        "c": 5,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                212
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                7,
                206
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-05-17 02:00:00+00:00"
    },
    {
        "id": 52,
        "image": "IIshiiIcon.webp",
        "w_image": "IIshiiProfile.webp",
        "label": "IIshii",
        "name": "石井 色葉 — Iroha Ishii — いろっち Irocchi",
        "ruby": "いしい いろは",
        "team": "31D",
        "profile": {
            "cv": "桑原由気",
            "vo": "",
            "bd": "5月26日",
            "bp": "和歌山",
            "hg": "156cm",
            "sc": "『世界をあーし色に染め上げるッス』",
            "desc": "生まれつき色が常人とは違う知覚で見えているアーティスト。\n色がわからないことをビハインドとはとらえておらず、自分だけの世界を描くことに熱中している。\n色彩に関することに限らず、様々な面で独創的な価値観を持つ。\nそのため、作品も極めて独創的な表現に偏っている。"
        },
        "cards": [
            {
                "id": 1005201,
                "image": "IIshiiDefault_R1_Thumbnail.webp",
                "label": "IIshii01",
                "name": "お気楽カラフル",
                "role": "Buffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46005202,
                        "l": "IIshiiSkill01",
                        "n": "エンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005202,
                "image": "IIshiiDefault_R2_Thumbnail.webp",
                "label": "IIshii02",
                "name": "多彩なるインスピレーション",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005203,
                        "l": "IIshiiSkill02",
                        "n": "ヴィヴィットシュート",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001034,
                        "l": "Passive.Turn_OverDrivePointUpRandom01",
                        "n": "[Auto] 福運",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUpRandom"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005203,
                "image": "IIshiiDefault_R3_Thumbnail.webp",
                "label": "IIshii03",
                "name": "撃砕の無彩色",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005204,
                        "l": "IIshiiSkill03",
                        "n": "フィルエンハンス",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46005205,
                        "l": "IIshiiSkill51",
                        "n": "アクロマティックバレット",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "Field",
                                "Dark",
                                "Zone"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001068,
                        "l": "Passive.Start_FieldEffectDark01",
                        "n": "[Auto] 闇夜の陣",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Field",
                                "Dark",
                                "Zone"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005204,
                "image": "IIshiiDefault_R2a_Thumbnail.webp",
                "label": "IIshii04",
                "name": "ピュア・エモーション",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005206,
                        "l": "IIshiiSkill04",
                        "n": "ファイトパッション",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                7,
                207
            ],
            "wis": [
                9,
                214
            ],
            "dex": [
                8,
                208
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                212
            ],
            "con": [
                8,
                208
            ]
        },
        "reincarnation": 2,
        "in_date": "2023-07-14 02:00:00+00:00"
    },
    {
        "id": 53,
        "image": "FMikotoIcon.webp",
        "w_image": "FMikotoProfile.webp",
        "label": "FMikoto",
        "name": "命 吹雪 — Fubuki Mikoto — ふぶきん Fubukin",
        "ruby": "みこと ふぶき",
        "team": "31D",
        "profile": {
            "cv": "浅見春那",
            "vo": "",
            "bd": "3月4日",
            "bp": "北海道",
            "hg": "154cm",
            "sc": "『Make a Change…Kill Yourself』",
            "desc": "聴いていると死にたくなってくる危険な音楽、デプレッシブブラックメタルを愛する。\n途中までは普通のメタルをやっていたが、デプレッシブブラックメタルを始めた途端、メンバーは去って行った。\n以降、ドラムだけは打ち込みで、ギター、ベース、ボーカル、ミックス、マスタリングまですべてひとりでこなすことに。\n多作だが、一番売れたアルバムでも２１枚。"
        },
        "cards": [
            {
                "id": 1005301,
                "image": "FMikotoDefault_R1_Thumbnail.webp",
                "label": "FMikoto01",
                "name": "Metal Crazy",
                "role": "Debuffer",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46005302,
                        "l": "FMikotoSkill01",
                        "n": "レイジングシャウト",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 5,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005302,
                "image": "FMikotoDefault_R2_Thumbnail.webp",
                "label": "FMikoto02",
                "name": "Silent Reverberations",
                "role": "Debuffer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005307,
                        "l": "FMikotoSkill03",
                        "n": "R.I.P.",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "StunRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001092,
                        "l": "Passive.Turn_SlashCriticalDamageUp01",
                        "n": "[Auto] 斬の躍動",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005303,
                "image": "FMikotoDefault_R3_Thumbnail.webp",
                "label": "FMikoto03",
                "name": "終末なにする？",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005303,
                        "l": "FMikotoSkill02",
                        "n": "先に逝くなよ",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Dark",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46005304,
                        "l": "FMikotoSkill51",
                        "n": "破滅でおやすみ",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001029,
                        "l": "Passive.Start_Enemy_DefenceDown01",
                        "n": "[Auto] 弱化",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                8,
                210
            ],
            "dex": [
                8,
                209
            ],
            "spr": [
                8,
                209
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 2,
        "in_date": "2023-06-30 02:00:00+00:00"
    },
    {
        "id": 54,
        "image": "RMurohushiIcon.webp",
        "w_image": "RMurohushiProfile.webp",
        "label": "RMurohushi",
        "name": "室伏 理沙 — Risa Murofushi — りさママ RisaMama",
        "ruby": "むろふし りさ",
        "team": "31D",
        "profile": {
            "cv": "中村桜",
            "vo": "",
            "bd": "5月12日",
            "bp": "山口",
            "hg": "168cm",
            "sc": "『常に上を向いていきましょう』",
            "desc": "全身から母性が溢れ出すお姉さん。バレーボール部のエリートとしてスカウトされた。\nなんでも受け止める包容力を持つ。その包容力の前では普段からどれだけ気を張っている者であろうと甘えずにはいられない。\nお母さん扱いされると「あらあら」「うふふ」と言いつつたしなめる。どこまで本気で怒っているのかわからない。\n彼女の前では、誰であろうと幼児返りを起こす。"
        },
        "cards": [
            {
                "id": 1005401,
                "image": "RMurohushiDefault_R1_Thumbnail.webp",
                "label": "RMurohushi01",
                "name": "親愛のレシーバー",
                "role": "Healer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46005402,
                        "l": "RMurohushiSkill01",
                        "n": "リカバー",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001028,
                        "l": "Passive.Condition_Dp50Less_DpUp01",
                        "n": "[Auto] 気合",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005402,
                "image": "RMurohushiDefault_R2_Thumbnail.webp",
                "label": "RMurohushi02",
                "name": "痛いの痛いの飛んでけ〜♪",
                "role": "Healer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005403,
                        "l": "RMurohushiSkill02",
                        "n": "リバースショット",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001026,
                        "l": "Passive.Turn_Sub_HealDp01",
                        "n": "[Auto] 友愛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005403,
                "image": "RMurohushiDefault_R3_Thumbnail.webp",
                "label": "RMurohushi03",
                "name": "早くおうちに帰りましょ",
                "role": "Healer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005404,
                        "l": "RMurohushiSkill03",
                        "n": "フィルリカバー",
                        "c": 8,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ]
                        ]
                    },
                    {
                        "i": 46005405,
                        "l": "RMurohushiSkill51",
                        "n": "ハートフル・ボマー",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "AllyAll",
                                "FightingSpirit"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001072,
                        "l": "Passive.Turn_HealAll02",
                        "n": "[Auto] 慈愛の心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyAll",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005404,
                "image": "RMurohushiDefault_R2a_Thumbnail.webp",
                "label": "RMurohushi04",
                "name": "あまいろの花",
                "role": "Healer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005406,
                        "l": "RMurohushiSkill04",
                        "n": "儚き目覚め",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005405,
                "image": "RMurohushiRace_R3_Thumbnail.webp",
                "label": "RMurohushi05",
                "name": "潜入、笑顔で技術交流会",
                "role": "Healer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005407,
                        "l": "RMurohushiSkill05",
                        "n": "癒やされスマイル",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllySingle",
                                "HealDp"
                            ]
                        ]
                    },
                    {
                        "i": 46005408,
                        "l": "RMurohushiSkill52",
                        "n": "叡智の賜物",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "ReviveDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001072,
                        "l": "Passive.Turn_HealAll02",
                        "n": "[Auto] 慈愛の心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyAll",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                8,
                209
            ],
            "spr": [
                8,
                208
            ],
            "luk": [
                7,
                207
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-06-30 02:00:00+00:00"
    },
    {
        "id": 55,
        "image": "ADateIcon.webp",
        "w_image": "ADateProfile.webp",
        "label": "ADate",
        "name": "伊達 朱里 — Akari Date — あかりん Akarin",
        "ruby": "だて あかり",
        "team": "31D",
        "profile": {
            "cv": "大野柚布子",
            "vo": "",
            "bd": "10月21日",
            "bp": "兵庫",
            "hg": "154cm",
            "sc": "『エースをねらわれるな』",
            "desc": "テニス部のエリートとしてスカウトされた…が、自己評価が異様に低いネガティブ少女。\n練習ではしっかり動けるのだが、大会では練習時の実力が発揮できないのか、戦績はゼロ。\nそれでも、テニスに対する姿勢は（低姿勢ながらも）真剣。\n側にいると、彼女のネガティブ空間に引き込まれることも。"
        },
        "cards": [
            {
                "id": 1005501,
                "image": "ADateDefault_R1_Thumbnail.webp",
                "label": "ADate01",
                "name": "ネガティブエース",
                "role": "Breaker",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46005502,
                        "l": "ADateSkill01",
                        "n": "サービス・エース",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005502,
                "image": "ADateDefault_R2_Thumbnail.webp",
                "label": "ADate02",
                "name": "マーベルアプローチ",
                "role": "Breaker",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005503,
                        "l": "ADateSkill02",
                        "n": "スライスショット",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001054,
                        "l": "Passive.Start_DarkEnhance01",
                        "n": "[Auto] 闇の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005503,
                "image": "ADateDefault_R3_Thumbnail.webp",
                "label": "ADate03",
                "name": "テニスコートの悪魔",
                "role": "Breaker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005504,
                        "l": "ADateSkill03",
                        "n": "被害妄想",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46005505,
                        "l": "ADateSkill51",
                        "n": "漆黒トランスサーブ",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005504,
                "image": "ADateXmas2023_R3_Thumbnail.webp",
                "label": "ADate04",
                "name": "Holiday Star Night",
                "role": "Breaker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005506,
                        "l": "ADateSkill04",
                        "n": "アバランチ",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46005507,
                        "l": "ADateSkill52",
                        "n": "哀のスノードロップ",
                        "c": 14,
                        "u": 2,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001091,
                        "l": "Passive.Start_IceEnhance03",
                        "n": "[Auto] 氷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001070,
                        "l": "Passive.Start_IceEnhance02",
                        "n": "[Auto] 氷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                212
            ],
            "wis": [
                8,
                211
            ],
            "dex": [
                8,
                208
            ],
            "spr": [
                7,
                207
            ],
            "luk": [
                8,
                212
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-12-01 02:00:00+00:00"
    },
    {
        "id": 56,
        "image": "AMizuharaIcon.webp",
        "w_image": "AMizuharaProfile.webp",
        "label": "AMizuhara",
        "name": "瑞原 あいな — Aina Mizuhara — あいちん Aichin",
        "ruby": "みずはら あいな",
        "team": "31D",
        "profile": {
            "cv": "星谷美緒",
            "vo": "",
            "bd": "11月2日",
            "bp": "静岡",
            "hg": "141cm",
            "sc": "『どこまでも潜るさー』",
            "desc": "幼い見た目とは裏腹に、海洋生物学の博士号を持ち、第一線で活躍する研究者。\n外見相応にのほほんとした雰囲気の少女。\n海洋生物の中でも、深海魚に興味を持ち、外見、生態、味のすべてに惚れ込んでいる。\n勤勉だが、海洋生物学以外の学問は苦手。"
        },
        "cards": [
            {
                "id": 1005601,
                "image": "AMizuharaDefault_R1_Thumbnail.webp",
                "label": "AMizuhara01",
                "name": "深き海の学び手",
                "role": "Debuffer",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46005602,
                        "l": "AMizuharaSkill01",
                        "n": "ラブカ・ブレード",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001031,
                        "l": "Passive.3Turn_CriticalRateUp01",
                        "n": "[Auto] 洞察",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005602,
                "image": "AMizuharaDefault_R2_Thumbnail.webp",
                "label": "AMizuhara02",
                "name": "アビスからの誘い",
                "role": "Debuffer",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005603,
                        "l": "AMizuharaSkill02",
                        "n": "ディープブロー",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Fragile"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005603,
                "image": "AMizuharaDefault_R3_Thumbnail.webp",
                "label": "AMizuhara03",
                "name": "ロックアップオルカ",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005604,
                        "l": "AMizuharaSkill03",
                        "n": "大海原",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Fragile"
                            ]
                        ]
                    },
                    {
                        "i": 46005605,
                        "l": "AMizuharaSkill51",
                        "n": "海のギャング",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001029,
                        "l": "Passive.Start_Enemy_DefenceDown01",
                        "n": "[Auto] 弱化",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005604,
                "image": "AMizuharaDefault_R2a_Thumbnail.webp",
                "label": "AMizuhara04",
                "name": "奥深い味わいを",
                "role": "Debuffer",
                "tier": "S",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46005606,
                        "l": "AMizuharaSkill04",
                        "n": "デバノデバン",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001105,
                        "l": "Passive.Turn_IceCriticalDamageUp01",
                        "n": "[Auto] 氷の躍動",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Ice",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1005605,
                "image": "AMizuharaPirates_R3_Thumbnail.webp",
                "label": "AMizuhara05",
                "name": "ラッシュ！スタブ！ツナ！",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46005607,
                        "l": "AMizuharaSkill52",
                        "n": "豪快！パイレーツキャノン",
                        "c": 7,
                        "u": 6,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    },
                    {
                        "i": 46005614,
                        "l": "AMizuharaSkill05",
                        "n": "ヌラルジャ",
                        "c": 12,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Dark",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001133,
                        "l": "Passive.kireazi",
                        "n": "[Auto] キレアジ",
                        "s": 0,
                        "c": "IsFront() && IsAttackNormal()==0 && ConsumeSp()<=8",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001134,
                        "l": "Passive.iwashi",
                        "n": "[Auto] モロイウオ",
                        "s": 3,
                        "c": "IsFront() && IsAttackNormal()==0 && ConsumeSp()<=8",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-05-17 02:00:00+00:00"
    },
    {
        "id": 61,
        "image": "IcOhshimaIcon.webp",
        "w_image": "IcOhshimaProfile.webp",
        "label": "IcOhshima",
        "name": "大島 一千子 — Ichiko Ohshima — いっちー Icchii",
        "ruby": "おおしま いちこ",
        "team": "31E",
        "profile": {
            "cv": "日向葵",
            "vo": "",
            "bd": "11月29日",
            "bp": "福岡",
            "hg": "160cm",
            "sc": "『大島家長女ここにあり』",
            "desc": "貧乏な家庭で育った六つ子の長女。一家のまとめ役。\n貧乏で苦しくても、自分だけはいつも笑顔で明るい家族を作ろうと努力してきた。\n長女であることに強い責任感を持つ。\n家族が安定した収入を得られるよう、軍の中で出世したいというハングリー精神を持っている。"
        },
        "cards": [
            {
                "id": 1006101,
                "image": "IcOhshimaDefault_R1_Thumbnail.webp",
                "label": "IcOhshima01",
                "name": "一千子の抱擁",
                "role": "Defender",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46006102,
                        "l": "IcOhshimaSkill01",
                        "n": "ライオンハート",
                        "c": 3,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001023,
                        "l": "Passive.3Turn_DefenceUp01",
                        "n": "[Auto] 警衛",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006102,
                "image": "IcOhshimaDefault_R2_Thumbnail.webp",
                "label": "IcOhshima02",
                "name": "同床異夢明けて",
                "role": "Defender",
                "tier": "S",
                "type": "Strike",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46006103,
                        "l": "IcOhshimaSkill02",
                        "n": "負けるな、私",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006103,
                "image": "IcOhshimaDefault_R3_Thumbnail.webp",
                "label": "IcOhshima03",
                "name": "果てなき慈愛の守護者",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006105,
                        "l": "IcOhshimaSkill04",
                        "n": "滾る激情",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "AttackDown"
                            ]
                        ]
                    },
                    {
                        "i": 46006106,
                        "l": "IcOhshimaSkill51",
                        "n": "慈愛の波動",
                        "c": 9,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ],
                            [
                                "AllyAll",
                                "DefenseUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001059,
                        "l": "Passive.Turn_DefenceUp01",
                        "n": "[Auto] 賢守",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006104,
                "image": "IcOhshimaBride_R3_Thumbnail.webp",
                "label": "IcOhshima04",
                "name": "Sweet Phantasy",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46006104,
                        "l": "IcOhshimaSkill03",
                        "n": "決意の夜",
                        "c": 3,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "ToughnessUpValue"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    },
                    {
                        "i": 46006107,
                        "l": "IcOhshimaSkill52",
                        "n": "とどけ！ 誓いのしるし",
                        "c": 16,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001082,
                        "l": "Passive.Start_FireEnhance04",
                        "n": "[Auto] 火の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001085,
                        "l": "Passive.Condition_Provoke01",
                        "n": "[Auto] 鋭気",
                        "s": 3,
                        "c": "IsFront()&&CountBC(IsPlayer()==0&&IsDead()==0&&SpecialStatusCountByType(12)>0)>0||CountBC(IsPlayer()==0&&IsDead()==0&&SpecialStatusCountByType(57)>0)>0",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                8,
                211
            ],
            "dex": [
                8,
                209
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-06-24 02:00:00+00:00"
    },
    {
        "id": 62,
        "image": "NiOhshimaIcon.webp",
        "w_image": "NiOhshimaProfile.webp",
        "label": "NiOhshima",
        "name": "大島 二以奈 — Niina Ohshima — ニーナ Niina",
        "ruby": "おおしま にいな",
        "team": "31E",
        "profile": {
            "cv": "金子彩花",
            "vo": "",
            "bd": "11月29日",
            "bp": "福岡",
            "hg": "163cm",
            "sc": "『うぬぼれ、大いに結構』",
            "desc": "貧乏な家庭で育った六つ子の次女。一家のおしゃれ担当。\n地方雑誌の読者モデルで得た収入を家に収め、仕事先で譲ってもらった服を家族に配っている。\nおしゃれが好きだが、貧乏なので普段の服装は実用性重視。\n自分の容姿に自信を持ち、自分磨きを欠かさない。"
        },
        "cards": [
            {
                "id": 1006201,
                "image": "NiOhshimaDefault_R1_Thumbnail.webp",
                "label": "NiOhshima01",
                "name": "二以奈の気品",
                "role": "Blaster",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46006202,
                        "l": "NiOhshimaSkill01",
                        "n": "砕華",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006202,
                "image": "NiOhshimaDefault_R2_Thumbnail.webp",
                "label": "NiOhshima02",
                "name": "戦線キャットウォーク",
                "role": "Blaster",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46006203,
                        "l": "NiOhshimaSkill02",
                        "n": "桜華",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealDpByDamage"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006203,
                "image": "NiOhshimaDefault_R3_Thumbnail.webp",
                "label": "NiOhshima03",
                "name": "Brand New Mind",
                "role": "Blaster",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46006204,
                        "l": "NiOhshimaSkill03",
                        "n": "レヴォリューション",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46006205,
                        "l": "NiOhshimaSkill51",
                        "n": "純愛アンビシャス",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "AllyFront",
                                "DamageRateUp"
                            ]
                        ]
                    },
                    {
                        "i": 46006261,
                        "l": "NiOhshimaSkill51Ev1",
                        "n": "純愛アンビシャス+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "AllyFront",
                                "DamageRateUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001074,
                        "l": "Passive.Start_DamageRateBuffUp01",
                        "n": "[Auto] 鮮烈",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "DamageRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006204,
                "image": "NiOhshimaDefault_R2a_Thumbnail.webp",
                "label": "NiOhshima04",
                "name": "戸惑いの波際",
                "role": "Blaster",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46006206,
                        "l": "NiOhshimaSkill04",
                        "n": "ファーストラヴ",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DamageRateUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001084,
                        "l": "Passive.Start_Enemy_FireDefenceDown01",
                        "n": "[Auto] 火の威圧",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "Fire",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006205,
                "image": "NiOhshimaYukata2023_R3_Thumbnail.webp",
                "label": "NiOhshima05",
                "name": "心緒、昂る温泉郷",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46006207,
                        "l": "NiOhshimaSkill05",
                        "n": "誘掖の途",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46006208,
                        "l": "NiOhshimaSkill52",
                        "n": "爽籟に舞う仁慈",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001099,
                        "l": "Passive.Start_LightEnhance04",
                        "n": "[Auto] 光の采配",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                8,
                209
            ],
            "spr": [
                8,
                211
            ],
            "luk": [
                8,
                209
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 2,
        "in_date": "2023-10-06 02:00:00+00:00"
    },
    {
        "id": 63,
        "image": "MiOhshimaIcon.webp",
        "w_image": "MiOhshimaProfile.webp",
        "label": "MiOhshima",
        "name": "大島 三野里 — Minori Ohshima — みのりん Minorin",
        "ruby": "おおしま みのり",
        "team": "31E",
        "profile": {
            "cv": "中島由貴",
            "vo": "",
            "bd": "11月29日",
            "bp": "福岡",
            "hg": "158cm",
            "sc": "『はいよ、戦力お待たせ』",
            "desc": "貧乏な家庭で育った六つ子の三女。一家のムードメーカー。\nかつては朝は新聞配達、放課後はデリバリーサービスのバイトで一家の生計を助けていた。\nセラフ本部でも、スケボーに乗って様々な荷物を配達している。\n最速で配達をするためなら無茶なルートでもスケボーで駆け抜ける。"
        },
        "cards": [
            {
                "id": 1006301,
                "image": "MiOhshimaDefault_R1_Thumbnail.webp",
                "label": "MiOhshima01",
                "name": "三野里の疾走",
                "role": "Attacker",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46006302,
                        "l": "MiOhshimaSkill01",
                        "n": "ダッシュブレード",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001030,
                        "l": "Passive.Start_OverDriveUp01",
                        "n": "[Auto] 咆吼",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006302,
                "image": "MiOhshimaDefault_R2_Thumbnail.webp",
                "label": "MiOhshima02",
                "name": "韋駄天配達人",
                "role": "Attacker",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46006304,
                        "l": "MiOhshimaSkill03",
                        "n": "サイクロンブレード",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006303,
                "image": "MiOhshimaDefault_R3_Thumbnail.webp",
                "label": "MiOhshima03",
                "name": "Realize Your Mind",
                "role": "Attacker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46006303,
                        "l": "MiOhshimaSkill02",
                        "n": "パワークラッシュ",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46006305,
                        "l": "MiOhshimaSkill51",
                        "n": "宙舞うハイテンション",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "AllyFront",
                                "MindEye"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001061,
                        "l": "Passive.Start_FireEnhance02",
                        "n": "[Auto] 火の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                8,
                212
            ],
            "spr": [
                8,
                208
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 3,
        "in_date": "2022-11-14 02:00:00+00:00"
    },
    {
        "id": 64,
        "image": "YoOhshimaIcon.webp",
        "w_image": "YoOhshimaProfile.webp",
        "label": "YoOhshima",
        "name": "大島 四ツ葉 — Yotsuha Ohshima — よっつん Yottsun",
        "ruby": "おおしま よつは",
        "team": "31E",
        "profile": {
            "cv": "内山茉莉",
            "vo": "",
            "bd": "11月29日",
            "bp": "福岡",
            "hg": "139cm",
            "sc": "『頑張らない！』",
            "desc": "貧乏な家庭で育った六つ子の四女。一家のサボり担当。\n姉妹の中で唯一、欠片もハングリー精神がない少女。\n引きこもりだが貧乏なので、ひたすら寝るのが趣味。でも天使の寝顔。\nセラフ部隊に入ってからはゲームにコーラに贅沢三昧。"
        },
        "cards": [
            {
                "id": 1006401,
                "image": "YoOhshimaDefault_R1_Thumbnail.webp",
                "label": "YoOhshima01",
                "name": "四ツ葉の倦怠",
                "role": "Buffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46006402,
                        "l": "YoOhshimaSkill01",
                        "n": "エンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006402,
                "image": "YoOhshimaDefault_R2_Thumbnail.webp",
                "label": "YoOhshima02",
                "name": "Lollipop Break",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006403,
                        "l": "YoOhshimaSkill02",
                        "n": "キャンディ・バースト",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 3,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001060,
                        "l": "Passive.Start_FireEnhance01",
                        "n": "[Auto] 火の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006403,
                "image": "YoOhshimaDefault_R3_Thumbnail.webp",
                "label": "YoOhshima03",
                "name": "破られたアンニュイ",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006404,
                        "l": "YoOhshimaSkill03",
                        "n": "決戦前夜",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "AllySub",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46006405,
                        "l": "YoOhshimaSkill51",
                        "n": "夢見る幻想覚醒",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "AllySub",
                                "Fire",
                                "AttackUp"
                            ],
                            [
                                "AllySub",
                                "Fire",
                                "CriticalRateUp"
                            ],
                            [
                                "AllySub",
                                "Fire",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001069,
                        "l": "Passive.Start_GiveAttackBuffUp01",
                        "n": "[Auto] 気転",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006404,
                "image": "YoOhshimaSheep_R3_Thumbnail.webp",
                "label": "YoOhshima04",
                "name": "ぐうたらパジャマナイト",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006406,
                        "l": "YoOhshimaSkill04",
                        "n": "グッナイ",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46006407,
                        "l": "YoOhshimaSkill52",
                        "n": "ポッピング・バブル",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "AllySub",
                                "Light",
                                "AttackUp"
                            ],
                            [
                                "AllySub",
                                "Light",
                                "CriticalDamageUp"
                            ],
                            [
                                "AllySub",
                                "Funnel"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001111,
                        "l": "Passive.Turn_HealSp02",
                        "n": "[Auto] 後閃",
                        "s": 1,
                        "c": "IsFront()==0",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001112,
                        "l": "Passive.Start_LightEnhance05",
                        "n": "[Auto] 光の応援",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()==0",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                7,
                207
            ],
            "wis": [
                8,
                211
            ],
            "dex": [
                8,
                212
            ],
            "spr": [
                8,
                208
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-01-05 02:00:00+00:00"
    },
    {
        "id": 65,
        "image": "IrOhshimaIcon.webp",
        "w_image": "IrOhshimaProfile.webp",
        "label": "IrOhshima",
        "name": "大島 五十鈴 — Isuzu Ohshima — 五十鈴っち Isuzucchi",
        "ruby": "おおしま いすず",
        "team": "31E",
        "profile": {
            "cv": "中野さいま",
            "vo": "",
            "bd": "11月29日",
            "bp": "福岡",
            "hg": "154cm",
            "sc": "『オープン・ザ・ロック』",
            "desc": "貧乏な家庭で育った六つ子の五女。一家のトラブルメーカー。\nいたずら好きで家族を困らせることもしばしば。\n鍵開けを得意とし、錠をまるで生き物を扱うかのように開けていく。\n本人曰く、女の子の扱いも得意。"
        },
        "cards": [
            {
                "id": 1006501,
                "image": "IrOhshimaDefault_R1_Thumbnail.webp",
                "label": "IrOhshima01",
                "name": "五十鈴の秘密",
                "role": "Debuffer",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46006502,
                        "l": "IrOhshimaSkill01",
                        "n": "トラブルメーカー",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "ConfusionRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001031,
                        "l": "Passive.3Turn_CriticalRateUp01",
                        "n": "[Auto] 洞察",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006502,
                "image": "IrOhshimaDefault_R2_Thumbnail.webp",
                "label": "IrOhshima02",
                "name": "ピースフルフレーバー",
                "role": "Debuffer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006505,
                        "l": "IrOhshimaSkill03",
                        "n": "ヴィクタープラクティス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Fire",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001002,
                        "l": "Passive.Condition_AttackUp02",
                        "n": "[Auto] 勇猛",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006503,
                "image": "IrOhshimaDefault_R3_Thumbnail.webp",
                "label": "IrOhshima03",
                "name": "勝利への鍵",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006503,
                        "l": "IrOhshimaSkill02",
                        "n": "怒裂昂",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Fire",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46006504,
                        "l": "IrOhshimaSkill51",
                        "n": "魔炎閃獄門",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001029,
                        "l": "Passive.Start_Enemy_DefenceDown01",
                        "n": "[Auto] 弱化",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006504,
                "image": "IrOhshimaYukata2023_R3_Thumbnail.webp",
                "label": "IrOhshima04",
                "name": "湯上がり夢現郷",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006506,
                        "l": "IrOhshimaSkill04",
                        "n": "露わな鋒",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "ConfusionRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46006507,
                        "l": "IrOhshimaSkill52",
                        "n": "ほてるししむら",
                        "c": 10,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ],
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001090,
                        "l": "Passive.Start_GiveDefenseDebuffUp01",
                        "n": "[Auto] 侵食",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                211
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                8,
                208
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                212
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 2,
        "in_date": "2023-10-06 02:00:00+00:00"
    },
    {
        "id": 66,
        "image": "MuOhshimaIcon.webp",
        "w_image": "MuOhshimaProfile.webp",
        "label": "MuOhshima",
        "name": "大島 六宇亜 — Muua Ohshima — ムーア Muua",
        "ruby": "おおしま むうあ",
        "team": "31E",
        "profile": {
            "cv": "福島美里衣",
            "vo": "",
            "bd": "11月29日",
            "bp": "福岡",
            "hg": "157cm",
            "sc": "『あたしはこけたりしない』",
            "desc": "貧乏な家庭で育った六つ子の六女。一家の癒やし担当。\n身体を動かすことが好きで、走ることだけは誰にも負けたくない。\nコミュ力が高く、誰とでも友達になれる。\n自分の身体を苛め抜くことを追求し、時にそれに悦びを感じることも…。"
        },
        "cards": [
            {
                "id": 1006601,
                "image": "MuOhshimaDefault_R1_Thumbnail.webp",
                "label": "MuOhshima01",
                "name": "六宇亜の陶酔",
                "role": "Healer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46006602,
                        "l": "MuOhshimaSkill01",
                        "n": "リカバー",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001028,
                        "l": "Passive.Condition_Dp50Less_DpUp01",
                        "n": "[Auto] 気合",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006602,
                "image": "MuOhshimaDefault_R2_Thumbnail.webp",
                "label": "MuOhshima02",
                "name": "疾走エクスタシー",
                "role": "Healer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006603,
                        "l": "MuOhshimaSkill02",
                        "n": "我忘恍惚",
                        "c": 7,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "Self",
                                "RecoilRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001026,
                        "l": "Passive.Turn_Sub_HealDp01",
                        "n": "[Auto] 友愛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006603,
                "image": "MuOhshimaDefault_R3_Thumbnail.webp",
                "label": "MuOhshima03",
                "name": "ピンチで最高",
                "role": "Healer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006604,
                        "l": "MuOhshimaSkill03",
                        "n": "トランスペイン",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46006605,
                        "l": "MuOhshimaSkill51",
                        "n": "快感・スプリント！",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllySub",
                                "MindEye"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001072,
                        "l": "Passive.Turn_HealAll02",
                        "n": "[Auto] 慈愛の心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyAll",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006604,
                "image": "MuOhshimaDefault_R2a_Thumbnail.webp",
                "label": "MuOhshima04",
                "name": "グルーヴィーなロール",
                "role": "Healer",
                "tier": "S",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006606,
                        "l": "MuOhshimaSkill04",
                        "n": "生存の業",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001026,
                        "l": "Passive.Turn_Sub_HealDp01",
                        "n": "[Auto] 友愛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealDpRate"
                            ]
                        ]
                    },
                    {
                        "i": 57001098,
                        "l": "Passive.Turn_FireCriticalDamageUp01",
                        "n": "[Auto] 火の躍動",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Fire",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1006605,
                "image": "MuOhshimaFurisode2024_R3_Thumbnail.webp",
                "label": "MuOhshima05",
                "name": "早春向かい風",
                "role": "Healer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46006607,
                        "l": "MuOhshimaSkill05",
                        "n": "サンシャイン",
                        "c": 6,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyAll",
                                "RemoveSpecialStatus"
                            ]
                        ]
                    },
                    {
                        "i": 46006608,
                        "l": "MuOhshimaSkill52",
                        "n": "新しい朝が来た！",
                        "c": 10,
                        "u": 2,
                        "e": [
                            [
                                "AllySingle",
                                "HealDp"
                            ],
                            [
                                "AllySingle",
                                "HealSkillUsedCount"
                            ],
                            [
                                "AllySingle",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001111,
                        "l": "Passive.Turn_HealSp02",
                        "n": "[Auto] 後閃",
                        "s": 1,
                        "c": "IsFront()==0",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001113,
                        "l": "Passive.Turn_HealAll03",
                        "n": "[Auto]後方救護",
                        "s": 3,
                        "c": "IsFront()==0",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyAll",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                8,
                212
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                8,
                209
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                9,
                213
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-01-05 02:00:00+00:00"
    },
    {
        "id": 71,
        "image": "MYanagiIcon.webp",
        "w_image": "MYanagiProfile.webp",
        "label": "MYanagi",
        "name": "柳 美音 — Mion Yanagi — やなぎん Yanagin",
        "ruby": "やなぎ みおん",
        "team": "31F",
        "profile": {
            "cv": "鳥越まあや",
            "vo": "",
            "bd": "4月13日",
            "bp": "宮城",
            "hg": "170cm",
            "sc": "『お嬢様の仰せのままに』",
            "desc": "３１Ｆの部隊長であると同時に、同部隊の丸山奏多に仕える執事。\n執事としての能力は非常に高く、家事や雑務を完璧にこなすだけでなく、戦闘能力も高い。\nやんちゃな丸山のサポートで気苦労が多いが、真っ直ぐな心を持つ丸山を誰よりも尊敬し、信頼している。\n丸山の危機には敏感で少し過保護。丸山のためなら冷酷にもなる。"
        },
        "cards": [
            {
                "id": 1007101,
                "image": "MYanagiDefault_R1_Thumbnail.webp",
                "label": "MYanagi01",
                "name": "ロイヤルバトラー",
                "role": "Healer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46007102,
                        "l": "MYanagiSkill01",
                        "n": "リカバー",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 5,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007102,
                "image": "MYanagiDefault_R2_Thumbnail.webp",
                "label": "MYanagi02",
                "name": "滅私奉公のトラスト",
                "role": "Healer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46007103,
                        "l": "MYanagiSkill02",
                        "n": "華麗なる清掃",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealDpByDamage"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001026,
                        "l": "Passive.Turn_Sub_HealDp01",
                        "n": "[Auto] 友愛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007103,
                "image": "MYanagiDefault_R3_Thumbnail.webp",
                "label": "MYanagi03",
                "name": "Wild Rose",
                "role": "Healer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46007104,
                        "l": "MYanagiSkill03",
                        "n": "フィルリカバー",
                        "c": 8,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ]
                        ]
                    },
                    {
                        "i": 46007105,
                        "l": "MYanagiSkill51",
                        "n": "エレガンス・シェル",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyAll",
                                "BuffCharge"
                            ]
                        ]
                    },
                    {
                        "i": 46007161,
                        "l": "MYanagiSkill51Ev1",
                        "n": "エレガンス・シェル+",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyAll",
                                "BuffCharge"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001018,
                        "l": "Passive.Turn_HealAll01",
                        "n": "[Auto] 博愛の心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyFront",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007104,
                "image": "MYanagiPunk_R3_Thumbnail.webp",
                "label": "MYanagi04",
                "name": "夜風のChill Time",
                "role": "Healer",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46007106,
                        "l": "MYanagiSkill04",
                        "n": "エキゾーストノート",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46007107,
                        "l": "MYanagiSkill52",
                        "n": "ハイビーム・イルミネーション",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001095,
                        "l": "Passive.Start_GiveHealUp01",
                        "n": "[Auto] 恵風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveHealUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007105,
                "image": "MYanagiDefault_R2a_Thumbnail.webp",
                "label": "MYanagi05",
                "name": "執事の嗜み",
                "role": "Buffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46007108,
                        "l": "MYanagiSkill05",
                        "n": "日々のメンテナンス",
                        "c": 6,
                        "u": 10,
                        "e": [
                            [
                                "AllySingleWithoutSelf",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 3,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001137,
                        "l": "Passive.Start_GiveHealUp02",
                        "n": "[Auto] 薫風",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveHealUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                211
            ],
            "dex": [
                8,
                212
            ],
            "spr": [
                8,
                208
            ],
            "luk": [
                8,
                209
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-08-23 02:00:00+00:00"
    },
    {
        "id": 72,
        "image": "KMaruyamaIcon.webp",
        "w_image": "KMaruyamaProfile.webp",
        "label": "KMaruyama",
        "name": "丸山 奏多 — Kanata Maruyama — まるちゃん MaruChan",
        "ruby": "まるやま かなた",
        "team": "31F",
        "profile": {
            "cv": "河野ひより",
            "vo": "",
            "bd": "10月1日",
            "bp": "宮城",
            "hg": "139cm",
            "sc": "『センスの違いを見せてやる』",
            "desc": "様々な分野のセンスの塊。センスに強いこだわりを持つ。\n名家の一人娘だが、少年らしい言動が目立つ。\nがさつな言動をお付きの執事である柳に窘められることもあるが、本人は気にしていない。\n本人は認めないが、柳に依存しきっている。"
        },
        "cards": [
            {
                "id": 1007201,
                "image": "KMaruyamaDefault_R1_Thumbnail.webp",
                "label": "KMaruyama01",
                "name": "リトルハイセンス",
                "role": "Breaker",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46007202,
                        "l": "KMaruyamaSkill01",
                        "n": "ラージ・カノン",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001005,
                        "l": "Passive.Condition_SpUp01",
                        "n": "[Auto] 決意",
                        "s": 5,
                        "c": "Sp()>=10 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007202,
                "image": "KMaruyamaDefault_R2_Thumbnail.webp",
                "label": "KMaruyama02",
                "name": "お嬢様は端麗",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007203,
                        "l": "KMaruyamaSkill02",
                        "n": "シャドウインサイト",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001076,
                        "l": "Passive.Start_Enemy_DarkDefenceDown01",
                        "n": "[Auto] 闇の威圧",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "Dark",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007203,
                "image": "KMaruyamaDefault_R3_Thumbnail.webp",
                "label": "KMaruyama03",
                "name": "エボリューションな感受性",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007205,
                        "l": "KMaruyamaSkill04",
                        "n": "ハイセンス・ショット",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "BuffCharge"
                            ]
                        ]
                    },
                    {
                        "i": 46007206,
                        "l": "KMaruyamaSkill51",
                        "n": "ヴォイドストーム",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    },
                    {
                        "i": 46007261,
                        "l": "KMaruyamaSkill51Ev1",
                        "n": "ヴォイドストーム+",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001057,
                        "l": "Passive.Condition_AttackUp03",
                        "n": "[Auto] 壮烈",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007204,
                "image": "KMaruyamaDefault_R2a_Thumbnail.webp",
                "label": "KMaruyama04",
                "name": "木漏れ日の庭",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007209,
                        "l": "KMaruyamaSkill05",
                        "n": "主君の努め",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007205,
                "image": "KMaruyamaPanda_R3_Thumbnail.webp",
                "label": "KMaruyama05",
                "name": "スマイリー・ブルーム",
                "role": "Blaster",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007210,
                        "l": "KMaruyamaSkill52",
                        "n": "回る！ぽんぽこ花吹雪",
                        "c": 18,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "AllyFront",
                                "DamageRateUp"
                            ],
                            [
                                "All",
                                "ConfusionRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46007211,
                        "l": "KMaruyamaSkill06",
                        "n": "春爛漫",
                        "c": 6,
                        "u": 2,
                        "e": [
                            [
                                "Self",
                                "HealDp"
                            ],
                            [
                                "Self",
                                "BuffCharge"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001132,
                        "l": "Passive.Charge_HealSp01",
                        "n": "[Auto] 充填",
                        "s": 0,
                        "c": "SpecialStatusCountByType(25)>0",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001131,
                        "l": "Passive.DP101_HealSp01",
                        "n": "[Auto] 旺盛",
                        "s": 1,
                        "c": "DpRate()>=1.01",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001074,
                        "l": "Passive.Start_DamageRateBuffUp01",
                        "n": "[Auto] 鮮烈",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "DamageRateUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                9,
                213
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                211
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-05-17 02:00:00+00:00"
    },
    {
        "id": 73,
        "image": "SHanamuraIcon.webp",
        "w_image": "SHanamuraProfile.webp",
        "label": "SHanamura",
        "name": "華村 詩紀 — Shiki Hanamura — シッキー Shikkii",
        "ruby": "はなむら しき",
        "team": "31F",
        "profile": {
            "cv": "時澤香保里",
            "vo": "",
            "bd": "3月25日",
            "bp": "山梨",
            "hg": "172cm",
            "sc": "『ここが私のステージだ』",
            "desc": "クラシックをこよなく愛する指揮者。\n良い音楽をつくるためには感情を知る必要があり、感情を知るためには色恋沙汰をたくさん経験してしかるべき、という信念を持っている。\n恋多き事を恥ずかしく思わない信条から、大勢の少女たちを自室に招いている。\n夢はセラフ部隊のみんなで、自分中心の楽団（ハレム）を作ること。"
        },
        "cards": [
            {
                "id": 1007301,
                "image": "SHanamuraDefault_R1_Thumbnail.webp",
                "label": "SHanamura01",
                "name": "アバンチュールコンダクター",
                "role": "Buffer",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46007302,
                        "l": "SHanamuraSkill01",
                        "n": "エンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007302,
                "image": "SHanamuraDefault_R2_Thumbnail.webp",
                "label": "SHanamura02",
                "name": "木漏れ日のソナタ",
                "role": "Buffer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46007303,
                        "l": "SHanamuraSkill02",
                        "n": "聖域のカンタータ",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "AllyAll",
                                "BuffCharge"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001025,
                        "l": "Passive.Turn_Sub_HealSp01",
                        "n": "[Auto] 先駆",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007303,
                "image": "SHanamuraDefault_R3_Thumbnail.webp",
                "label": "SHanamura03",
                "name": "君のUnisono",
                "role": "Buffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46007304,
                        "l": "SHanamuraSkill03",
                        "n": "不純なアリア",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46007305,
                        "l": "SHanamuraSkill51",
                        "n": "小鳥たちへのシンフォニー",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "AllyAll",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46007361,
                        "l": "SHanamuraSkill51Ev1",
                        "n": "小鳥たちへのシンフォニー+",
                        "c": 9,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "AllyAll",
                                "Dark",
                                "AttackUp"
                            ],
                            [
                                "AllyAll",
                                "BuffCharge"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001033,
                        "l": "Passive.Turn_OverDriveUp01",
                        "n": "[Auto] 向上心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                9,
                214
            ],
            "dex": [
                8,
                208
            ],
            "spr": [
                8,
                208
            ],
            "luk": [
                8,
                209
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 3,
        "in_date": "2022-09-15 02:00:00+00:00"
    },
    {
        "id": 74,
        "image": "CMatsuokaIcon.webp",
        "w_image": "CMatsuokaProfile.webp",
        "label": "CMatsuoka",
        "name": "松岡 チロル — Chiroru Matsuoka — マツチロ Matsuchiro",
        "ruby": "まつおか チロル",
        "team": "31F",
        "profile": {
            "cv": "小島ゆい",
            "vo": "",
            "bd": "4月26日",
            "bp": "高知",
            "hg": "150cm",
            "sc": "『どんな戦場でもおまかせあれ』",
            "desc": "様々なアクションをこなすスタントウーマン。\n生傷の絶えない体は、過酷なスタントを「無事に」こなしてきた証。\n裏方という役目に誇りを持っており、求められればどんなことにも気前よく力を貸す。\nちょっとした演技もこなすことができて、ノリも良い。"
        },
        "cards": [
            {
                "id": 1007401,
                "image": "CMatsuokaDefault_R1_Thumbnail.webp",
                "label": "CMatsuoka01",
                "name": "天才かませ犬",
                "role": "Defender",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46007402,
                        "l": "CMatsuokaSkill01",
                        "n": "ギャザー・バッシュ",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001031,
                        "l": "Passive.3Turn_CriticalRateUp01",
                        "n": "[Auto] 洞察",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007402,
                "image": "CMatsuokaDefault_R2_Thumbnail.webp",
                "label": "CMatsuoka02",
                "name": "秘めたる努力",
                "role": "Defender",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46007403,
                        "l": "CMatsuokaSkill02",
                        "n": "バックラッシュ",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001096,
                        "l": "Passive.Turn_StrikeCriticalDamageUp01",
                        "n": "[Auto] 打の躍動",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007403,
                "image": "CMatsuokaDefault_R3_Thumbnail.webp",
                "label": "CMatsuoka03",
                "name": "疾風迅速滅亡の狼煙",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007404,
                        "l": "CMatsuokaSkill03",
                        "n": "疾黒破弾",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 46007405,
                        "l": "CMatsuokaSkill51",
                        "n": "必滅！ヴェインキック",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    },
                    {
                        "i": 46007461,
                        "l": "CMatsuokaSkill51Ev1",
                        "n": "必滅！ヴェインキック+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001067,
                        "l": "Passive.Turn_CriticalDamageUp01",
                        "n": "[Auto] 怒涛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007404,
                "image": "CMatsuokaCasual_R3_Thumbnail.webp",
                "label": "CMatsuoka04",
                "name": "内緒のコーヒーブレイク",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46007406,
                        "l": "CMatsuokaSkill04",
                        "n": "そよ風に吹かれて",
                        "c": 12,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "AttackDown"
                            ]
                        ]
                    },
                    {
                        "i": 46007407,
                        "l": "CMatsuokaSkill52",
                        "n": "リフレッシング・チアーズ！",
                        "c": 12,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "BuffCharge"
                            ],
                            [
                                "AllyAll",
                                "DefenseUp"
                            ],
                            [
                                "AllyAll",
                                "RegenerationDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001147,
                        "l": "Passive.Start_DebuffGuard_Light",
                        "n": "[Auto] ライトプロテクション",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "AdditionalHitOnExtraSkill"
                            ],
                            [
                                "AllyAll",
                                "DebuffGuard"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001059,
                        "l": "Passive.Turn_DefenceUp01",
                        "n": "[Auto] 賢守",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                209
            ],
            "con": [
                9,
                215
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-08-23 02:00:00+00:00"
    },
    {
        "id": 75,
        "image": "INatsumeIcon.webp",
        "w_image": "INatsumeProfile.webp",
        "label": "INatsume",
        "name": "夏目 祈 — Inori Natsume — いのりん Inorin",
        "ruby": "なつめ いのり",
        "team": "31F",
        "profile": {
            "cv": "築山苑佳",
            "vo": "",
            "bd": "8月15日",
            "bp": "東京",
            "hg": "154cm",
            "sc": "『相伝の一閃、いざ』",
            "desc": "江戸時代から脈々と続く、罪人を処刑する剣技を受け継いだ少女。\n常に重々しい雰囲気を放ち、人を寄せ付けようとしない。\n基本、誰とも会話しようとせず、目も合わせようとしない。\n実はただの口下手なのかもしれない。"
        },
        "cards": [
            {
                "id": 1007501,
                "image": "INatsumeDefault_R1_Thumbnail.webp",
                "label": "INatsume01",
                "name": "天誅斬影",
                "role": "Attacker",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46007502,
                        "l": "INatsumeSkill01",
                        "n": "残心",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "BuffCharge"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 5,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007502,
                "image": "INatsumeDefault_R2_Thumbnail.webp",
                "label": "INatsume02",
                "name": "彼岸の人斬り",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007503,
                        "l": "INatsumeSkill02",
                        "n": "瞬刃",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001006,
                        "l": "Passive.Condition_SpUp02",
                        "n": "[Auto] 決心",
                        "s": 3,
                        "c": "Sp()>=15 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007503,
                "image": "INatsumeDefault_R3_Thumbnail.webp",
                "label": "INatsume03",
                "name": "剣の冷徹",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007504,
                        "l": "INatsumeSkill03",
                        "n": "クールダウン",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46007505,
                        "l": "INatsumeSkill51",
                        "n": "夜嵐",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Dark",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001075,
                        "l": "Passive.Start_DarkEnhance02",
                        "n": "[Auto] 闇の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Dark",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007504,
                "image": "INatsumeButterfly_R3_Thumbnail.webp",
                "label": "INatsume04",
                "name": "薫衣香る夢見鳥",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007508,
                        "l": "INatsumeSkill04",
                        "n": "冀望",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ],
                            [
                                "Self",
                                "BuffCharge"
                            ]
                        ]
                    },
                    {
                        "i": 46007509,
                        "l": "INatsumeSkill52",
                        "n": "唯雅粛正",
                        "c": 18,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001020,
                        "l": "Passive.Start_HealSp01",
                        "n": "[Auto] 機敏",
                        "s": 0,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001067,
                        "l": "Passive.Turn_CriticalDamageUp01",
                        "n": "[Auto] 怒涛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                210
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-08-31 02:00:00+00:00"
    },
    {
        "id": 76,
        "image": "MKurosawaIcon.webp",
        "w_image": "MKurosawaProfile.webp",
        "label": "MKurosawa",
        "name": "黒沢 真希 — Maki Kurosawa — まっきー Makkii",
        "ruby": "くろさわ まき",
        "team": "31F",
        "profile": {
            "cv": "黒瀬ゆうこ",
            "vo": "",
            "bd": "11月22日",
            "bp": "広島",
            "hg": "163cm",
            "sc": "『うちの背中についてきんさい！』",
            "desc": "たった１年で全国制覇を成し遂げた暴走族の総長。\n道を共にする仲間を第一に考え、義理と人情に生きる。\n気合の入った人物を見つけると、自分のチームに勧誘しようとする。\n「広島焼き」を断じて認めない。"
        },
        "cards": [
            {
                "id": 1007601,
                "image": "MKurosawaDefault_R1_Thumbnail.webp",
                "label": "MKurosawa01",
                "name": "Highway of Angels",
                "role": "Blaster",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46007602,
                        "l": "MKurosawaSkill01",
                        "n": "一発入魂",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001031,
                        "l": "Passive.3Turn_CriticalRateUp01",
                        "n": "[Auto] 洞察",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007602,
                "image": "MKurosawaDefault_R2_Thumbnail.webp",
                "label": "MKurosawa02",
                "name": "唯我独尊",
                "role": "Blaster",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007603,
                        "l": "MKurosawaSkill02",
                        "n": "喧嘩上等！！",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "BuffCharge"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001028,
                        "l": "Passive.Condition_Dp50Less_DpUp01",
                        "n": "[Auto] 気合",
                        "s": 3,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealDpRate"
                            ]
                        ]
                    },
                    {
                        "i": 57001056,
                        "l": "Passive.Start_StrikeEnhance01",
                        "n": "[Auto] 打の意志",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007603,
                "image": "MKurosawaDefault_R3_Thumbnail.webp",
                "label": "MKurosawa03",
                "name": "ハレの日の仏恥義理",
                "role": "Blaster",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007604,
                        "l": "MKurosawaSkill03",
                        "n": "武血伽魔死",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46007605,
                        "l": "MKurosawaSkill51",
                        "n": "覇道妄執我突邁進",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "SkillCondition"
                            ]
                        ]
                    },
                    {
                        "i": 46007661,
                        "l": "MKurosawaSkill51Ev1",
                        "n": "覇道妄執我突邁進+",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "SkillCondition"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001010,
                        "l": "Passive.Start_Funnel01",
                        "n": "[Auto] 狂乱の型",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1007604,
                "image": "MKurosawaCasual_R3_Thumbnail.webp",
                "label": "MKurosawa04",
                "name": "青あらし走死走愛",
                "role": "Breaker",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46007608,
                        "l": "MKurosawaSkill04",
                        "n": "アクセル全開",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "BuffCharge"
                            ]
                        ]
                    },
                    {
                        "i": 46007609,
                        "l": "MKurosawaSkill52",
                        "n": "走り屋に夜露死苦",
                        "c": 18,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ],
                            [
                                "Single",
                                "Thunder",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001132,
                        "l": "Passive.Charge_HealSp01",
                        "n": "[Auto] 充填",
                        "s": 0,
                        "c": "SpecialStatusCountByType(25)>0",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001146,
                        "l": "Passive.Break_HealSp02",
                        "n": "[Auto] 激震",
                        "s": 3,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "AdditionalHitOnBreaking"
                            ],
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                212
            ],
            "wis": [
                7,
                207
            ],
            "dex": [
                7,
                206
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                212
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-08-23 02:00:00+00:00"
    },
    {
        "id": 81,
        "image": "CReaperIcon.webp",
        "w_image": "CReaperProfile.webp",
        "label": "CReaper",
        "name": "キャロル・リーパー — Carole Reaper — キャロル Kyaroru",
        "ruby": "キャロル・リーパー",
        "team": "31X",
        "profile": {
            "cv": "八巻アンナ",
            "vo": "",
            "bd": "8月2日",
            "bp": "アメリカ・ニューヨーク",
            "hg": "164cm",
            "sc": "『Ready, steady, die』",
            "desc": "アメリカ・ニューヨーク支部から派遣されてきたセラフ隊員。３１Ｘの部隊長。\n常に自前の衣装やマスクをつけ、ヒーローじみた言動をとる。\n鎌型のセラフを用い、ダークヒーロー系のキャラ付けで自分を印象付けようとしている。\nツッコミもアメリカン。"
        },
        "cards": [
            {
                "id": 1008101,
                "image": "CReaperDefault_R1_Thumbnail.webp",
                "label": "CReaper01",
                "name": "星の継承者",
                "role": "Attacker",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46008102,
                        "l": "CReaperSkill01",
                        "n": "ブラスト・スラッシュ",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 5,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008102,
                "image": "CReaperDefault_R2_Thumbnail.webp",
                "label": "CReaper02",
                "name": "心の風景",
                "role": "Attacker",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008103,
                        "l": "CReaperSkill02",
                        "n": "パニッシャー",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008103,
                "image": "CReaperDefault_R3_Thumbnail.webp",
                "label": "CReaper03",
                "name": "摩天楼のダークヒーロー",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008105,
                        "l": "CReaperSkill03",
                        "n": "ライトニングロア",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46008106,
                        "l": "CReaperSkill51",
                        "n": "サンダーストーム",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001081,
                        "l": "Passive.Start_ThunderEnhance04",
                        "n": "[Auto] 雷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001016,
                        "l": "Passive.Turn_AttackUpAll01",
                        "n": "[Auto] 英雄の凱歌",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyAll",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008104,
                "image": "CReaperDefault_R2a_Thumbnail.webp",
                "label": "CReaper04",
                "name": "キャッスル・オブ・パープル",
                "role": "Breaker",
                "tier": "S",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008107,
                        "l": "CReaperSkill04",
                        "n": "渦中のヴァイオレット",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 3,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 10,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                212
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                7,
                206
            ],
            "con": [
                9,
                213
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-05-31 02:00:00+00:00"
    },
    {
        "id": 82,
        "image": "LShanhuaIcon.webp",
        "w_image": "LShanhuaProfile.webp",
        "label": "LShanhua",
        "name": "李 映夏 — Yingxia Li — ユンユン Yunyun",
        "ruby": "りー ゆんしあ",
        "team": "31X",
        "profile": {
            "cv": "小柳日菜",
            "vo": "",
            "bd": "12月14日",
            "bp": "中国・北京",
            "hg": "158cm",
            "sc": "『我が覇道を見よ』",
            "desc": "中国・北京支部から派遣されてきたセラフ隊員。\n諸葛孔明の子孫であることを誇りにしており、自身も抜きんでた軍略を備えている。\n孔明への尊敬の念が少々空回っているところがある。\n三国志の故事に関わるとガードが緩くなる。"
        },
        "cards": [
            {
                "id": 1008201,
                "image": "LShanhuaDefault_R1_Thumbnail.webp",
                "label": "LShanhua01",
                "name": "臥龍の代弁者",
                "role": "Buffer",
                "tier": "A",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46008202,
                        "l": "LShanhuaSkill01",
                        "n": "エンハンス",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001024,
                        "l": "Passive.Turn_Sp3Less_HealSp01",
                        "n": "[Auto] 好機",
                        "s": 5,
                        "c": "Sp()<=3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008202,
                "image": "LShanhuaDefault_R2_Thumbnail.webp",
                "label": "LShanhua02",
                "name": "武を成すは天に在り",
                "role": "Buffer",
                "tier": "S",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008203,
                        "l": "LShanhuaSkill02",
                        "n": "臥龍演舞斬",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001025,
                        "l": "Passive.Turn_Sub_HealSp01",
                        "n": "[Auto] 先駆",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008203,
                "image": "LShanhuaDefault_R3_Thumbnail.webp",
                "label": "LShanhua03",
                "name": "我、勇ならざるは将なきに同じ",
                "role": "Buffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008204,
                        "l": "LShanhuaSkill03",
                        "n": "臥龍天命",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ],
                            [
                                "AllyFront",
                                "SelfDamage"
                            ]
                        ]
                    },
                    {
                        "i": 46008205,
                        "l": "LShanhuaSkill51",
                        "n": "第七計 無中生有",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllySingle",
                                "AttackUp"
                            ],
                            [
                                "AllySingle",
                                "Funnel"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001069,
                        "l": "Passive.Start_GiveAttackBuffUp01",
                        "n": "[Auto] 気転",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008204,
                "image": "LShanhuaNoble_R3_Thumbnail.webp",
                "label": "LShanhua04",
                "name": "いざなうつゆくさ",
                "role": "Buffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008206,
                        "l": "LShanhuaSkill04",
                        "n": "春雷",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46008207,
                        "l": "LShanhuaSkill52",
                        "n": "霓裳羽衣ノ舞・霹靂",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "Thunder",
                                "CriticalRateUp"
                            ],
                            [
                                "AllyAll",
                                "Thunder",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001079,
                        "l": "Passive.Start_ThunderEnhance03",
                        "n": "[Auto] 雷の采配",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008205,
                "image": "LShanhuaSuspicious_R3_Thumbnail.webp",
                "label": "LShanhua05",
                "name": "春宵ウォーアイニー",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Slash",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008208,
                        "l": "LShanhuaSkill05",
                        "n": "螳螂之斧",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46008209,
                        "l": "LShanhuaSkill53",
                        "n": "春の宵の塵に同じ",
                        "c": 0,
                        "u": 2,
                        "e": [
                            [
                                "Single",
                                "FixedHpDamageRateAttack"
                            ],
                            [
                                "Single",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001126,
                        "l": "Passive.Start_GiveAttackBuffUp02",
                        "n": "[Auto] 増幅",
                        "s": 0,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveAttackBuffUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001090,
                        "l": "Passive.Start_GiveDefenseDebuffUp01",
                        "n": "[Auto] 侵食",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                9,
                215
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                8,
                209
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-04-05 02:00:00+00:00"
    },
    {
        "id": 83,
        "image": "IRedmayneIcon.webp",
        "w_image": "IRedmayneProfile.webp",
        "label": "IRedmayne",
        "name": "アイリーン・レドメイン — Irene Redmayne — アイリン Airin",
        "ruby": "アイリーン・レドメイン",
        "team": "31X",
        "profile": {
            "cv": "Marika",
            "vo": "",
            "bd": "10月7日",
            "bp": "イギリス・ロンドン",
            "hg": "143cm",
            "sc": "『真実は一つだけ』",
            "desc": "イギリス・ロンドン支部から派遣されてきた名探偵にして、セラフ隊員。\n観察力や推理力は鋭く、推理が当たると得意げになる。\n名探偵は自分の素性を明かさないものだとして、偽名を使っているらしい。\nたいがいの奇行も「名探偵なので」で押し通す。"
        },
        "cards": [
            {
                "id": 1008301,
                "image": "IRedmayneDefault_R1_Thumbnail.webp",
                "label": "IRedmayne01",
                "name": "不可思議の探求者",
                "role": "Breaker",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46008302,
                        "l": "IRedmayneSkill01",
                        "n": "エレメンタリー・バレット",
                        "c": 4,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001021,
                        "l": "Passive.3Turn_AttackUp01",
                        "n": "[Auto] 疾風",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008302,
                "image": "IRedmayneDefault_R2_Thumbnail.webp",
                "label": "IRedmayne02",
                "name": "ベイカー街の軌跡",
                "role": "Breaker",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008304,
                        "l": "IRedmayneSkill03",
                        "n": "エリミネイト・ポッシブル",
                        "c": 5,
                        "u": 10,
                        "e": [
                            [
                                "AllySingle",
                                "SpecifySp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001022,
                        "l": "Passive.1Turn_AttackUp01",
                        "n": "[Auto] 烈風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008303,
                "image": "IRedmayneDefault_R3_Thumbnail.webp",
                "label": "IRedmayne03",
                "name": "碧いカーヴァンクル",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008303,
                        "l": "IRedmayneSkill02",
                        "n": "ホールドアップマインド",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "CriticalRateUp"
                            ],
                            [
                                "Self",
                                "Funnel"
                            ]
                        ]
                    },
                    {
                        "i": 46008305,
                        "l": "IRedmayneSkill51",
                        "n": "トゥルーペネトレーター",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46008361,
                        "l": "IRedmayneSkill51Ev1",
                        "n": "トゥルーペネトレーター+",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "PenetrationCriticalAttack"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001057,
                        "l": "Passive.Condition_AttackUp03",
                        "n": "[Auto] 壮烈",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008304,
                "image": "IRedmaynePhantom_R3_Thumbnail.webp",
                "label": "IRedmayne04",
                "name": "月下のハイドアンドシーク",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008306,
                        "l": "IRedmayneSkill04",
                        "n": "解けない謎はない",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ],
                            [
                                "Self",
                                "CriticalDamageUp"
                            ]
                        ]
                    },
                    {
                        "i": 46008307,
                        "l": "IRedmayneSkill52",
                        "n": "華麗なるファントム・シーフ",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "PenetrationCriticalAttack"
                            ],
                            [
                                "Single",
                                "RemoveBuff"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001140,
                        "l": "Passive.disarmament_HealSp01",
                        "n": "[Auto] 怪盗乱麻",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "AdditionalHitOnRemovingBuff"
                            ],
                            [
                                "AllyFront",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001067,
                        "l": "Passive.Turn_CriticalDamageUp01",
                        "n": "[Auto] 怒涛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "CriticalDamageUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                208
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                9,
                214
            ],
            "spr": [
                7,
                207
            ],
            "luk": [
                7,
                207
            ],
            "con": [
                8,
                211
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-05-31 02:00:00+00:00"
    },
    {
        "id": 84,
        "image": "VBalakrishnanIcon.webp",
        "w_image": "VBalakrishnanProfile.webp",
        "label": "VBalakrishnan",
        "name": "ヴリティカ・バラクリシュナン — Vritika Balakrishnan — ヴリちゃん VuriChan",
        "ruby": "ヴリティカ・バラクリシュナン",
        "team": "31X",
        "profile": {
            "cv": "小坂井祐莉絵",
            "vo": "",
            "bd": "1月26日",
            "bp": "インド・ニューデリー",
            "hg": "131cm",
            "sc": "『数こそ万物の根源』",
            "desc": "インド・ニューデリー支部から派遣されてきたセラフ隊員。\n史上最年少で数学オリンピックにて金を取った少女。\n考え事をしているのか、ぼうっとしているのか、見抜くのが難しい。\n会話の最中に数字の世界に没頭し、何事もなかったかのように会話に戻ってくる。"
        },
        "cards": [
            {
                "id": 1008401,
                "image": "VBalakrishnanDefault_R1_Thumbnail.webp",
                "label": "VBalakrishnan01",
                "name": "華麗なるアプサラス",
                "role": "Debuffer",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 5,
                    "wis": 10,
                    "dex": 5,
                    "spr": 10,
                    "luk": 0,
                    "con": 0
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46008402,
                        "l": "VBalakrishnanSkill01",
                        "n": "トータルサブトラクション",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "AttackDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001003,
                        "l": "Passive.Condition_DefenceUp01",
                        "n": "[Auto] 忍耐",
                        "s": 5,
                        "c": "DpRate()<=0.5 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008402,
                "image": "VBalakrishnanDefault_R2_Thumbnail.webp",
                "label": "VBalakrishnan02",
                "name": "未知数なヴェーダーンガ",
                "role": "Debuffer",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46008403,
                        "l": "VBalakrishnanSkill02",
                        "n": "プリンシプルチャンダス",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "DefenseUp"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001063,
                        "l": "Passive.Start_Enemy_ThunderDefenceDown01",
                        "n": "[Auto] 雷の威圧",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008403,
                "image": "VBalakrishnanDefault_R3_Thumbnail.webp",
                "label": "VBalakrishnan03",
                "name": "凛々しきドゥルガー",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008404,
                        "l": "VBalakrishnanSkill03",
                        "n": "高輝の燦",
                        "c": 10,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyFront",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 46008405,
                        "l": "VBalakrishnanSkill51",
                        "n": "狂気乱舞のカーリー",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "AttackDown"
                            ],
                            [
                                "Single",
                                "ImprisonRandom"
                            ],
                            [
                                "Single",
                                "Misfortune"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001072,
                        "l": "Passive.Turn_HealAll02",
                        "n": "[Auto] 慈愛の心",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyAll",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008404,
                "image": "VBalakrishnanDefault_R2a_Thumbnail.webp",
                "label": "VBalakrishnan04",
                "name": "華麗なる日常",
                "role": "Defender",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "Passive.DefenceUpFromProvoke",
                    "n": "挑発・注目状態：ダメージ軽減"
                },
                "skills": [
                    {
                        "i": 46008406,
                        "l": "VBalakrishnanSkill04",
                        "n": "ジーナーカーナー",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealDpByDamage"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001004,
                        "l": "Passive.Condition_DefenceUp02",
                        "n": "[Auto] 堅忍",
                        "s": 3,
                        "c": "DpRate()==0.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008405,
                "image": "VBalakrishnanTradition_R3_Thumbnail.webp",
                "label": "VBalakrishnan05",
                "name": "美しきシャールドゥーラ",
                "role": "Healer",
                "tier": "SS",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008407,
                        "l": "VBalakrishnanSkill05",
                        "n": "パドマ・ナーチュナー",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackByOwnDpRate"
                            ]
                        ]
                    },
                    {
                        "i": 46008408,
                        "l": "VBalakrishnanSkill52",
                        "n": "艶色のサラスヴァティー",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyAll",
                                "DebuffGuard"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001135,
                        "l": "Passive.Condition_DefenceUp04",
                        "n": "[Auto] マナサの加護",
                        "s": 0,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "DefenseUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001095,
                        "l": "Passive.Start_GiveHealUp01",
                        "n": "[Auto] 恵風",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveHealUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                7,
                207
            ],
            "wis": [
                9,
                214
            ],
            "dex": [
                7,
                205
            ],
            "spr": [
                9,
                215
            ],
            "luk": [
                7,
                207
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-05-31 02:00:00+00:00"
    },
    {
        "id": 85,
        "image": "MdAngelisIcon.webp",
        "w_image": "MdAngelisProfile.webp",
        "label": "MdAngelis",
        "name": "マリア・デ・アンジェリス — Maria de Angelis — マリリン Maririn",
        "ruby": "マリア・デ・アンジェリス",
        "team": "31X",
        "profile": {
            "cv": "亜月優音",
            "vo": "",
            "bd": "2月26日",
            "bp": "イタリア・ローマ",
            "hg": "170cm",
            "sc": "『さあ子羊ども懺悔の時間だ』",
            "desc": "イタリア・ローマ支部から派遣されてきたセラフ隊員。\nシスター服を身にまとい、それに不釣り合いな斧を持ち歩いている。\n華奢な見た目とは裏腹に非常に怪力。\nガラが悪くすぐ暴言を吐くが、挨拶などの礼儀作法を大切にしている面もある。"
        },
        "cards": [
            {
                "id": 1008501,
                "image": "MdAngelisDefault_R1_Thumbnail.webp",
                "label": "MdAngelis01",
                "name": "くれないのシスター",
                "role": "Healer",
                "tier": "A",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 0,
                    "dex": 0,
                    "spr": 5,
                    "luk": 5,
                    "con": 10
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46008502,
                        "l": "MdAngelisSkill01",
                        "n": "パニッシュメント",
                        "c": 6,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "HealDp"
                            ],
                            [
                                "Self",
                                "TokenSet"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001037,
                        "l": "Passive.Token_DefenceUp01",
                        "n": "[Auto] 鉄壁",
                        "s": 5,
                        "c": "IsFront()",
                        "t": "OnEnemyTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUpPerToken"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008502,
                "image": "MdAngelisDefault_R2_Thumbnail.webp",
                "label": "MdAngelis02",
                "name": "罪と栄光",
                "role": "Healer",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 10,
                    "wis": 15,
                    "dex": 20,
                    "spr": 10,
                    "luk": 20,
                    "con": 15
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008505,
                        "l": "MdAngelisSkill03",
                        "n": "フィルリカバー",
                        "c": 8,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001026,
                        "l": "Passive.Turn_Sub_HealDp01",
                        "n": "[Auto] 友愛",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllySub",
                                "HealDpRate"
                            ]
                        ]
                    },
                    {
                        "i": 57001089,
                        "l": "Passive.Start_Enemy_StrikeDefenceDown01",
                        "n": "[Auto] 打の威圧",
                        "s": 10,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008503,
                "image": "MdAngelisDefault_R3_Thumbnail.webp",
                "label": "MdAngelis03",
                "name": "ブラッド・レリーフ",
                "role": "Healer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008503,
                        "l": "MdAngelisSkill02",
                        "n": "サクリファイス",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "TokenAttack"
                            ],
                            [
                                "Self",
                                "TokenSet"
                            ],
                            [
                                "Self",
                                "SelfDamage"
                            ]
                        ]
                    },
                    {
                        "i": 46008504,
                        "l": "MdAngelisSkill51",
                        "n": "コンヴィクション・ゼロ",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "TokenAttack"
                            ],
                            [
                                "Single",
                                "TokenChangeTimeline"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001073,
                        "l": "Passive.Start_Token01",
                        "n": "[Auto] 洗練",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnBattleStart",
                        "e": [
                            [
                                "Self",
                                "TokenSet"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008504,
                "image": "MdAngelisKnights_R3_Thumbnail.webp",
                "label": "MdAngelis04",
                "name": "刹那の邂逅",
                "role": "Healer",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008506,
                        "l": "MdAngelisSkill04",
                        "n": "フェリチータ",
                        "c": 8,
                        "u": 10,
                        "e": [
                            [
                                "AllyFront",
                                "RegenerationDp"
                            ],
                            [
                                "Self",
                                "TokenSet"
                            ]
                        ]
                    },
                    {
                        "i": 46008507,
                        "l": "MdAngelisSkill52",
                        "n": "救済のレクイエム",
                        "c": 14,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "TokenAttack"
                            ],
                            [
                                "AllyAll",
                                "RemoveSpecialStatus"
                            ],
                            [
                                "All",
                                "TokenChangeTimeline"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001104,
                        "l": "Passive.Start_TokenSetByHealedDp",
                        "n": "[Auto] 戦士の祝福",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "TokenSetByHealedDp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001064,
                        "l": "Passive.Start_ThunderEnhance02",
                        "n": "[Auto] 雷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                9,
                213
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                7,
                206
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                8,
                208
            ]
        },
        "reincarnation": 1,
        "in_date": "2023-11-17 02:00:00+00:00"
    },
    {
        "id": 86,
        "image": "CSkopovskayaIcon.webp",
        "w_image": "CSkopovskayaProfile.webp",
        "label": "CSkopovskaya",
        "name": "シャルロッタ・スコポフスカヤ — Charlotta Skopovskaya — シャロ Sharo",
        "ruby": "シャルロッタ・スコポフスカヤ",
        "team": "31X",
        "profile": {
            "cv": "会沢紗弥",
            "vo": "",
            "bd": "5月7日",
            "bp": "ロシア・モスクワ",
            "hg": "150cm",
            "sc": "『シャロを愛して』",
            "desc": "ロシア・モスクワ支部から派遣されてきたセラフ隊員。\n数々の恐ろしい戦場を生き残ってきたが、目立った功績はない。\nなぜかいつも独り生き残っている不思議な少女。\nマヌルネコのぬいぐるみをいつも抱えている。"
        },
        "cards": [
            {
                "id": 1008601,
                "image": "CSkopovskayaDefault_R1_Thumbnail.webp",
                "label": "CSkopovskaya01",
                "name": "北風の使者",
                "role": "Debuffer",
                "tier": "A",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 30,
                    "hp": 0,
                    "sp": 0,
                    "str": 0,
                    "wis": 5,
                    "dex": 10,
                    "spr": 0,
                    "luk": 10,
                    "con": 5
                },
                "gabi": null,
                "skills": [
                    {
                        "i": 46008602,
                        "l": "CSkopovskayaSkill01",
                        "n": "ディザスター",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "StunRandom"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001001,
                        "l": "Passive.Condition_AttackUp01",
                        "n": "[Auto] 勇気",
                        "s": 5,
                        "c": "DpRate()>=0.5 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008602,
                "image": "CSkopovskayaDefault_R2_Thumbnail.webp",
                "label": "CSkopovskaya02",
                "name": "雪華ノスタルジア",
                "role": "Debuffer",
                "tier": "S",
                "type": "Stab",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 20,
                    "wis": 10,
                    "dex": 10,
                    "spr": 15,
                    "luk": 15,
                    "con": 20
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46008603,
                        "l": "CSkopovskayaSkill02",
                        "n": "コーシュカ・アルマータ",
                        "c": -1,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackBySp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008603,
                "image": "CSkopovskayaDefault_R3_Thumbnail.webp",
                "label": "CSkopovskaya03",
                "name": "逆境に咲く華",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008604,
                        "l": "CSkopovskayaSkill03",
                        "n": "狼狽プーリァ",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "ConfusionRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46008605,
                        "l": "CSkopovskayaSkill51",
                        "n": "君に咲くグラナータ",
                        "c": 13,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Dark",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "DefenseDown"
                            ],
                            [
                                "All",
                                "Dark",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001090,
                        "l": "Passive.Start_GiveDefenseDebuffUp01",
                        "n": "[Auto] 侵食",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "GiveDefenseDebuffUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008604,
                "image": "CSkopovskayaVampire_R3_Thumbnail.webp",
                "label": "CSkopovskaya04",
                "name": "とこしえの想い",
                "role": "Debuffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Thunder"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008606,
                        "l": "CSkopovskayaSkill04",
                        "n": "ザヴィーシマスチ",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Thunder",
                                "DefenseDown"
                            ]
                        ]
                    },
                    {
                        "i": 46008607,
                        "l": "CSkopovskayaSkill52",
                        "n": "純潔のパツィルーイ",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "Thunder",
                                "ResistDownOverwrite"
                            ],
                            [
                                "All",
                                "Thunder",
                                "ResistDown"
                            ],
                            [
                                "All",
                                "Fragile"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001081,
                        "l": "Passive.Start_ThunderEnhance04",
                        "n": "[Auto] 雷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Thunder",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001103,
                        "l": "Passive.Start_Enemy_ThunderDefenceDown02",
                        "n": "[Auto] 雷の制圧",
                        "s": 3,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "All",
                                "Thunder",
                                "DefenseDown"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1008605,
                "image": "CSkopovskayaBride_R3_Thumbnail.webp",
                "label": "CSkopovskaya05",
                "name": "清廉なるニヴェースタ",
                "role": "Buffer",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Dark"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "BuffUp",
                    "n": "攻撃力上昇スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46008608,
                        "l": "CSkopovskayaSkill05",
                        "n": "クリャートヴァ",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "AllySingle",
                                "Dark",
                                "AttackUp"
                            ],
                            [
                                "AllySingle",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 46008609,
                        "l": "CSkopovskayaSkill53",
                        "n": "恍惚のヴァージンロード",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "AllySingleWithoutSelf",
                                "EternalOath"
                            ],
                            [
                                "AllySingleWithoutSelf",
                                "HealSp"
                            ],
                            [
                                "Self",
                                "EternalOath"
                            ],
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001139,
                        "l": "Passive.EternalOath_HealSp01",
                        "n": "[Auto] エンゲージリンク",
                        "s": 0,
                        "c": "IsFront() && CountBC(IsPlayer() && SpecialStatusCountByType(124)>0)>0",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyAll",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001138,
                        "l": "Passive.EternalOath_HealDp01",
                        "n": "[Auto] イノセント・ヴェール",
                        "s": 3,
                        "c": "CountBC(IsPlayer() && SpecialStatusCountByType(124)>0)>0",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "AllyAll",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                7,
                207
            ],
            "wis": [
                9,
                213
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                7,
                207
            ],
            "luk": [
                9,
                215
            ],
            "con": [
                7,
                207
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-06-14 02:00:00+00:00"
    },
    {
        "id": 901,
        "image": "STezukaIcon.webp",
        "w_image": "STezukaProfile.webp",
        "label": "STezuka",
        "name": "手塚 咲 — Saki Tezuka — ",
        "ruby": "てづか さき",
        "team": "司令部",
        "profile": null,
        "cards": [],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                210
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 1,
        "in_date": ""
    },
    {
        "id": 902,
        "image": "NNanaseIcon.webp",
        "w_image": "NNanaseProfile.webp",
        "label": "NNanase",
        "name": "七瀬 七海 — Nanami Nanase — ",
        "ruby": "ななせ ななみ",
        "team": "司令部",
        "profile": null,
        "cards": [],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                210
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 3,
        "in_date": ""
    },
    {
        "id": 903,
        "image": "MAsamiIcon.webp",
        "w_image": "MAsamiProfile.webp",
        "label": "MAsami",
        "name": "浅見 真紀子 — Makiko Asami — ",
        "ruby": "あさみ まきこ",
        "team": "司令部",
        "profile": null,
        "cards": [],
        "restrict": [],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                210
            ],
            "wis": [
                8,
                210
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                8,
                210
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 2,
        "in_date": ""
    },
    {
        "id": 2001,
        "image": "AliceAIcon.webp",
        "w_image": "AliceAProfile.webp",
        "label": "AliceA",
        "name": "立華 かなで — Kanade Tachibana — ",
        "ruby": "たちばな かなで",
        "team": "Angel Beats",
        "profile": {
            "cv": "花澤香菜",
            "vo": "",
            "bd": "ー",
            "bp": "ー",
            "hg": "ー",
            "sc": "『ガードスキル・サモンセラフ』",
            "desc": "大人しく成仏しようとしない「死んだ世界戦線」のメンバーと長年に渡り争いを続けてきた、死んだ世界の生徒会長。\n無口かつ冷静で感情を滅多に見せないが、中身は天然ボケかつ中二病。\nAngel Playerというソフトを使い、ガードスキルと名付けられた特殊な能力を操る。"
        },
        "cards": [
            {
                "id": 1020103,
                "image": "AliceADefault_R3_Thumbnail.webp",
                "label": "AliceA03",
                "name": "Earth Angel",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Light"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46040102,
                        "l": "AliceASkill01",
                        "n": "フォーチュンスラッシュ",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "HealSpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46040103,
                        "l": "AliceASkill02",
                        "n": "インサイト",
                        "c": 5,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "MindEye"
                            ]
                        ]
                    },
                    {
                        "i": 46040104,
                        "l": "AliceASkill51",
                        "n": "エンジェルズ・レイ",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Light",
                                "AttackSkill"
                            ],
                            [
                                "Self",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001083,
                        "l": "Passive.Start_LightEnhance03",
                        "n": "[Auto] 光の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001078,
                        "l": "Passive.Start_LightEnhance02",
                        "n": "[Auto] 光の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Light",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1020104,
                "image": "AliceAOnePiece_R3_Thumbnail.webp",
                "label": "AliceA04",
                "name": "天翔ける剣",
                "role": "Attacker",
                "tier": "SS",
                "type": "Slash",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46040105,
                        "l": "AliceASkill03",
                        "n": "ヘヴンズビート",
                        "c": 4,
                        "u": 4,
                        "e": [
                            [
                                "Self",
                                "HealDp"
                            ]
                        ]
                    },
                    {
                        "i": 46040106,
                        "l": "AliceASkill04",
                        "n": "フローズンタイム",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46040107,
                        "l": "AliceASkill52",
                        "n": "バーチカルフォース",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackByOwnDpRate"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001091,
                        "l": "Passive.Start_IceEnhance03",
                        "n": "[Auto] 氷の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001116,
                        "l": "Passive.Turn_SelfHeal01",
                        "n": "[Auto] 羽休め",
                        "s": 3,
                        "c": "",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealDpRate"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "",
                "end": ""
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                9,
                214
            ],
            "wis": [
                8,
                209
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                8,
                208
            ],
            "con": [
                8,
                210
            ]
        },
        "reincarnation": 1,
        "in_date": "2024-02-04 11:00:00+00:00"
    },
    {
        "id": 2002,
        "image": "AliceBIcon.webp",
        "w_image": "AliceBProfile.webp",
        "label": "AliceB",
        "name": "仲村 ゆり — Yuri Nakamura — ",
        "ruby": "なかむら ゆり",
        "team": "Angel Beats",
        "profile": {
            "cv": "櫻井浩美",
            "vo": "",
            "bd": "ー",
            "bp": "ー",
            "hg": "ー",
            "sc": "『あたしは戦う、あんな人生受け入れられないから！』",
            "desc": "死後の世界で「死んだ世界戦線」を長年率いてきた少女。\n性格は勝ち気で強気だが、誰もがついてくる強さと実行力とカリスマ性がある。\n本名はゆりだが、戦線のメンバーからは親しみを込めて「ゆりっぺ」と呼ばれている。"
        },
        "cards": [
            {
                "id": 1020203,
                "image": "AliceBDefault_R3_Thumbnail.webp",
                "label": "AliceB03",
                "name": "Rain Fire",
                "role": "Blaster",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Fire"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 40,
                    "wis": 30,
                    "dex": 30,
                    "spr": 35,
                    "luk": 35,
                    "con": 40
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46040202,
                        "l": "AliceBSkill01",
                        "n": "オンラッシュ",
                        "c": 6,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46040203,
                        "l": "AliceBSkill02",
                        "n": "バーストファイア",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46040204,
                        "l": "AliceBSkill51",
                        "n": "カタストロフィー",
                        "c": 15,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Fire",
                                "AttackSkill"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001082,
                        "l": "Passive.Start_FireEnhance04",
                        "n": "[Auto] 火の波動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "AllyAll",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001061,
                        "l": "Passive.Start_FireEnhance02",
                        "n": "[Auto] 火の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Fire",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1020204,
                "image": "AliceBBlazerUniform_R3_Thumbnail.webp",
                "label": "AliceB04",
                "name": "ありふれた非日常",
                "role": "Breaker",
                "tier": "SS",
                "type": "Stab",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 30,
                    "wis": 35,
                    "dex": 40,
                    "spr": 30,
                    "luk": 40,
                    "con": 35
                },
                "gabi": {
                    "l": "AttackUp",
                    "n": "スキルダメージアップ"
                },
                "skills": [
                    {
                        "i": 46040205,
                        "l": "AliceBSkill03",
                        "n": "フロストソーン",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46040206,
                        "l": "AliceBSkill04",
                        "n": "コールドバレット",
                        "c": 10,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46040207,
                        "l": "AliceBSkill52",
                        "n": "トゥルー・アイシクル",
                        "c": 16,
                        "u": 4,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Ice",
                                "SuperBreak"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001117,
                        "l": "Passive.Break_HealSp01",
                        "n": "[Auto] 激動",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "AdditionalHitOnBreaking"
                            ],
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001070,
                        "l": "Passive.Start_IceEnhance02",
                        "n": "[Auto] 氷の強威",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "",
                "end": ""
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                212
            ],
            "wis": [
                8,
                208
            ],
            "dex": [
                8,
                211
            ],
            "spr": [
                8,
                210
            ],
            "luk": [
                7,
                207
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 2,
        "in_date": "2024-02-04 11:00:00+00:00"
    },
    {
        "id": 2003,
        "image": "AliceCIcon.webp",
        "w_image": "AliceCProfile.webp",
        "label": "AliceC",
        "name": "入江 みゆき — Miyuki Irie — ",
        "ruby": "いりえ みゆき",
        "team": "Angel Beats",
        "profile": {
            "cv": "阿澄佳奈",
            "vo": "",
            "bd": "ー",
            "bp": "ー",
            "hg": "ー",
            "sc": "『移り変わらぬ気持ち』",
            "desc": "おどおどした小動物キャラで、戦線きってのビビリ。\n自分も死んでいるのに、幽霊が怖く、怪談話が大の苦手という矛盾を抱え持つ少女。\nただドラムを叩かせると、いっぱしのミュージシャンの表情を見せる。その時だけは格好いい。"
        },
        "cards": [
            {
                "id": 1020302,
                "image": "AliceCDefault_R2_Thumbnail.webp",
                "label": "AliceC02",
                "name": "Pure Cosmos",
                "role": "Defender",
                "tier": "S",
                "type": "Strike",
                "ele": [],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46040302,
                        "l": "AliceCSkill01",
                        "n": "ダウンビート",
                        "c": 8,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "AttackDown"
                            ]
                        ]
                    },
                    {
                        "i": 46040303,
                        "l": "AliceCSkill02",
                        "n": "ブレイクミュート",
                        "c": 9,
                        "u": 10,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyFront",
                                "DefenseUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001034,
                        "l": "Passive.Turn_OverDrivePointUpRandom01",
                        "n": "[Auto] 福運",
                        "s": 3,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "OverDrivePointUpRandom"
                            ]
                        ]
                    },
                    {
                        "i": 57001080,
                        "l": "Passive.Condition_Dp30Less_AttackUp01",
                        "n": "[Auto] 陽動作戦",
                        "s": 10,
                        "c": "DpRate()<=0.3 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 1020303,
                "image": "AliceCDefault_R3_Thumbnail.webp",
                "label": "AliceC03",
                "name": "Faraway Eden",
                "role": "Defender",
                "tier": "SS",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 70,
                    "hp": 0,
                    "sp": 0,
                    "str": 35,
                    "wis": 40,
                    "dex": 35,
                    "spr": 40,
                    "luk": 30,
                    "con": 30
                },
                "gabi": {
                    "l": "HealUp",
                    "n": "回復スキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46040304,
                        "l": "AliceCSkill03",
                        "n": "シンコペーション",
                        "c": 3,
                        "u": -1,
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ],
                            [
                                "All",
                                "Provoke"
                            ]
                        ]
                    },
                    {
                        "i": 46040305,
                        "l": "AliceCSkill04",
                        "n": "コールドストローク",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "Ice",
                                "AttackSkill"
                            ]
                        ]
                    },
                    {
                        "i": 46040306,
                        "l": "AliceCSkill51",
                        "n": "フェイント・ルミナスコスモス",
                        "c": 11,
                        "u": 4,
                        "e": [
                            [
                                "AllyAll",
                                "HealDp"
                            ],
                            [
                                "AllyAll",
                                "DefenseUp"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001114,
                        "l": "Passive.Break_Guard01",
                        "n": "[Auto] 根性",
                        "s": 0,
                        "c": "",
                        "t": "OnFirstBattleStart",
                        "e": [
                            [
                                "Self",
                                "BreakGuard"
                            ]
                        ]
                    },
                    {
                        "i": 57001051,
                        "l": "Passive.Turn_HealSp01",
                        "n": "[Auto] 閃光",
                        "s": 1,
                        "c": "IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001115,
                        "l": "Passive.Condition_DefenceUp03",
                        "n": "[Auto] 防御態勢",
                        "s": 3,
                        "c": "DpRate()>=1.0 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "Self",
                                "DefenseUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "",
                "end": ""
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                9,
                214
            ],
            "dex": [
                7,
                207
            ],
            "spr": [
                8,
                212
            ],
            "luk": [
                7,
                206
            ],
            "con": [
                8,
                212
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-01-20 13:00:00+00:00"
    },
    {
        "id": 2004,
        "image": "BiancaAIcon.webp",
        "w_image": "BiancaAProfile.webp",
        "label": "BiancaA",
        "name": "渕田 ひさ子 — Hisako Fuchida — ",
        "ruby": "ふちた ひさこ",
        "team": "Angel Beats",
        "profile": {
            "cv": "松浦チエ",
            "vo": "",
            "bd": "ー",
            "bp": "ー",
            "hg": "ー",
            "sc": "『嫌なことばかりでも前へ進め』",
            "desc": "曲者揃いのガルデモのまとめ役とリードギターを担当。\n姉御肌だが、怒らせるとギターで殴られる。\n生前は「汚れた血」というバンドでデビューも果たしたが、とある事件をきっかけに心を病む。\n死後の世界で岩沢と出会い、活力を得て再び活動を開始する。"
        },
        "cards": [
            {
                "id": 1020402,
                "image": "BiancaADefault_R2_Thumbnail.webp",
                "label": "BiancaA02",
                "name": "Finally found our silver lining",
                "role": "Debuffer",
                "tier": "S",
                "type": "Strike",
                "ele": [
                    "Ice"
                ],
                "stats": {
                    "dp": 50,
                    "hp": 0,
                    "sp": 0,
                    "str": 15,
                    "wis": 20,
                    "dex": 15,
                    "spr": 20,
                    "luk": 10,
                    "con": 10
                },
                "gabi": {
                    "l": "DebuffUp",
                    "n": "デバフスキル効果アップ"
                },
                "skills": [
                    {
                        "i": 46040402,
                        "l": "BiancaASkill01",
                        "n": "ヴァンダリズム",
                        "c": 7,
                        "u": -1,
                        "e": [
                            [
                                "All",
                                "AttackSkill"
                            ],
                            [
                                "All",
                                "ConfusionRandom"
                            ]
                        ]
                    },
                    {
                        "i": 46040403,
                        "l": "BiancaASkill02",
                        "n": "コールドクラッシュ",
                        "c": 9,
                        "u": -1,
                        "e": [
                            [
                                "Single",
                                "Ice",
                                "AttackSkill"
                            ],
                            [
                                "Single",
                                "Ice",
                                "DefenseDown"
                            ]
                        ]
                    }
                ],
                "passives": [
                    {
                        "i": 57001027,
                        "l": "Passive.Turn_Rate30_HealSp01",
                        "n": "[Auto] 吉報",
                        "s": 3,
                        "c": "Random()<0.3 && IsFront()",
                        "t": "OnEveryTurn",
                        "e": [
                            [
                                "Self",
                                "HealSp"
                            ]
                        ]
                    },
                    {
                        "i": 57001118,
                        "l": "Passive.Start_IceEnhance04",
                        "n": "[Auto] 氷の采配",
                        "s": 10,
                        "c": "DpRate()>=0.8 && IsFront()",
                        "t": "OnPlayerTurnStart",
                        "e": [
                            [
                                "AllyFront",
                                "Ice",
                                "AttackUp"
                            ]
                        ]
                    }
                ]
            }
        ],
        "restrict": [
            {
                "start": "",
                "end": ""
            }
        ],
        "base_param": {
            "level": [
                1,
                200
            ],
            "dp": [
                600,
                2000
            ],
            "hp": [
                450,
                1800
            ],
            "sp": [
                0,
                0
            ],
            "str": [
                8,
                209
            ],
            "wis": [
                9,
                214
            ],
            "dex": [
                8,
                210
            ],
            "spr": [
                7,
                206
            ],
            "luk": [
                9,
                215
            ],
            "con": [
                7,
                206
            ]
        },
        "reincarnation": 3,
        "in_date": "2024-02-04 11:00:00+00:00"
    }
]

export default _all_characters