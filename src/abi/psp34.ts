import {Abi} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xfe4bdd094362989115526d7f087d03d1af8dfde51c3bcb84e0a3f32005b34c2e",
    "language": "ink! 3.4.0",
    "compiler": "rustc 1.65.0-nightly"
  },
  "contract": {
    "name": "shiden34",
    "version": "0.2.0",
    "authors": [
      "Stake Technologies <devops@stake.co.jp>"
    ]
  },
  "V3": {
    "spec": {
      "constructors": [
        {
          "args": [
            {
              "label": "name",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 7
              }
            },
            {
              "label": "symbol",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 7
              }
            },
            {
              "label": "base_uri",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 7
              }
            },
            {
              "label": "max_supply",
              "type": {
                "displayName": [
                  "u64"
                ],
                "type": 5
              }
            },
            {
              "label": "price_per_mint",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 6
              }
            }
          ],
          "docs": [],
          "label": "new",
          "payable": false,
          "selector": "0x9bae9d5e"
        }
      ],
      "docs": [],
      "events": [
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "from",
              "type": {
                "displayName": [
                  "Option"
                ],
                "type": 19
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "to",
              "type": {
                "displayName": [
                  "Option"
                ],
                "type": 19
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "id",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when a token transfer occurs."
          ],
          "label": "Transfer"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "from",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "to",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "id",
              "type": {
                "displayName": [
                  "Option"
                ],
                "type": 14
              }
            },
            {
              "docs": [],
              "indexed": false,
              "label": "approved",
              "type": {
                "displayName": [
                  "bool"
                ],
                "type": 26
              }
            }
          ],
          "docs": [
            " Event emitted when a token approve occurs."
          ],
          "label": "Approval"
        }
      ],
      "messages": [
        {
          "args": [
            {
              "label": "owner",
              "type": {
                "displayName": [
                  "psp34_external",
                  "BalanceOfInput1"
                ],
                "type": 8
              }
            }
          ],
          "docs": [
            " Returns the balance of the owner.",
            "",
            " This represents the amount of unique tokens the owner has."
          ],
          "label": "PSP34::balance_of",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "BalanceOfOutput"
            ],
            "type": 4
          },
          "selector": "0xcde7e55f"
        },
        {
          "args": [
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "OwnerOfInput1"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Returns the owner of the token if any."
          ],
          "label": "PSP34::owner_of",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "OwnerOfOutput"
            ],
            "type": 19
          },
          "selector": "0x1168624d"
        },
        {
          "args": [
            {
              "label": "owner",
              "type": {
                "displayName": [
                  "psp34_external",
                  "AllowanceInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "operator",
              "type": {
                "displayName": [
                  "psp34_external",
                  "AllowanceInput2"
                ],
                "type": 8
              }
            },
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "AllowanceInput3"
                ],
                "type": 14
              }
            }
          ],
          "docs": [
            " Returns `true` if the operator is approved by the owner to withdraw `id` token.",
            " If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens."
          ],
          "label": "PSP34::allowance",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "AllowanceOutput"
            ],
            "type": 26
          },
          "selector": "0x4790f55a"
        },
        {
          "args": [
            {
              "label": "operator",
              "type": {
                "displayName": [
                  "psp34_external",
                  "ApproveInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "ApproveInput2"
                ],
                "type": 14
              }
            },
            {
              "label": "approved",
              "type": {
                "displayName": [
                  "psp34_external",
                  "ApproveInput3"
                ],
                "type": 26
              }
            }
          ],
          "docs": [
            " Approves `operator` to withdraw the `id` token from the caller's account.",
            " If `id` is `None` approves or disapproves the operator for all tokens of the caller.",
            "",
            " On success a `Approval` event is emitted.",
            "",
            " # Errors",
            "",
            " Returns `SelfApprove` error if it is self approve.",
            "",
            " Returns `NotApproved` error if caller is not owner of `id`."
          ],
          "label": "PSP34::approve",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "ApproveOutput"
            ],
            "type": 27
          },
          "selector": "0x1932a8b0"
        },
        {
          "args": [],
          "docs": [
            " Returns the collection `Id` of the NFT token.",
            "",
            " This can represents the relationship between tokens/contracts/pallets."
          ],
          "label": "PSP34::collection_id",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "CollectionIdOutput"
            ],
            "type": 1
          },
          "selector": "0xffa27a5f"
        },
        {
          "args": [],
          "docs": [
            " Returns current NFT total supply."
          ],
          "label": "PSP34::total_supply",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "TotalSupplyOutput"
            ],
            "type": 6
          },
          "selector": "0x628413fe"
        },
        {
          "args": [
            {
              "label": "to",
              "type": {
                "displayName": [
                  "psp34_external",
                  "TransferInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "TransferInput2"
                ],
                "type": 1
              }
            },
            {
              "label": "data",
              "type": {
                "displayName": [
                  "psp34_external",
                  "TransferInput3"
                ],
                "type": 7
              }
            }
          ],
          "docs": [
            " Transfer approved or owned token from caller.",
            "",
            " On success a `Transfer` event is emitted.",
            "",
            " # Errors",
            "",
            " Returns `TokenNotExists` error if `id` does not exist.",
            "",
            " Returns `NotApproved` error if `from` doesn't have allowance for transferring.",
            "",
            " Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer."
          ],
          "label": "PSP34::transfer",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "TransferOutput"
            ],
            "type": 27
          },
          "selector": "0x3128d61b"
        },
        {
          "args": [
            {
              "label": "index",
              "type": {
                "displayName": [
                  "psp34enumerable_external",
                  "TokenByIndexInput1"
                ],
                "type": 6
              }
            }
          ],
          "docs": [
            " Returns a token `Id` at a given `index` of all the tokens stored by the contract.",
            " Use along with `total_supply` to enumerate all tokens.",
            "",
            " The start index is zero."
          ],
          "label": "PSP34Enumerable::token_by_index",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34enumerable_external",
              "TokenByIndexOutput"
            ],
            "type": 29
          },
          "selector": "0xcd0340d0"
        },
        {
          "args": [
            {
              "label": "owner",
              "type": {
                "displayName": [
                  "psp34enumerable_external",
                  "OwnersTokenByIndexInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "index",
              "type": {
                "displayName": [
                  "psp34enumerable_external",
                  "OwnersTokenByIndexInput2"
                ],
                "type": 6
              }
            }
          ],
          "docs": [
            " Returns a token `Id` owned by `owner` at a given `index` of its token list.",
            " Use along with `balance_of` to enumerate all of ``owner``'s tokens.",
            "",
            " The start index is zero."
          ],
          "label": "PSP34Enumerable::owners_token_by_index",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34enumerable_external",
              "OwnersTokenByIndexOutput"
            ],
            "type": 29
          },
          "selector": "0x3bcfb511"
        },
        {
          "args": [
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34metadata_external",
                  "GetAttributeInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "key",
              "type": {
                "displayName": [
                  "psp34metadata_external",
                  "GetAttributeInput2"
                ],
                "type": 7
              }
            }
          ],
          "docs": [
            " Returns the attribute of `id` for the given `key`.",
            "",
            " If `id` is a collection id of the token, it returns attributes for collection."
          ],
          "label": "PSP34Metadata::get_attribute",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34metadata_external",
              "GetAttributeOutput"
            ],
            "type": 30
          },
          "selector": "0xf19d48d1"
        },
        {
          "args": [],
          "docs": [
            " Returns the address of the current owner."
          ],
          "label": "Ownable::owner",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "ownable_external",
              "OwnerOutput"
            ],
            "type": 8
          },
          "selector": "0x4fa43c8c"
        },
        {
          "args": [],
          "docs": [
            " Leaves the contract without owner. It will not be possible to call",
            " owner's functions anymore. Can only be called by the current owner.",
            "",
            " NOTE: Renouncing ownership will leave the contract without an owner,",
            " thereby removing any functionality that is only available to the owner.",
            "",
            " On success a `OwnershipTransferred` event is emitted.",
            "",
            " # Errors",
            "",
            " Panics with `CallerIsNotOwner` error if caller is not owner"
          ],
          "label": "Ownable::renounce_ownership",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ownable_external",
              "RenounceOwnershipOutput"
            ],
            "type": 31
          },
          "selector": "0x5e228753"
        },
        {
          "args": [
            {
              "label": "new_owner",
              "type": {
                "displayName": [
                  "ownable_external",
                  "TransferOwnershipInput1"
                ],
                "type": 8
              }
            }
          ],
          "docs": [
            " Transfers ownership of the contract to a `new_owner`.",
            " Can only be called by the current owner.",
            "",
            " On success a `OwnershipTransferred` event is emitted.",
            "",
            " # Errors",
            "",
            " Panics with `CallerIsNotOwner` error if caller is not owner.",
            "",
            " Panics with `NewOwnerIsZero` error if new owner's address is zero."
          ],
          "label": "Ownable::transfer_ownership",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ownable_external",
              "TransferOwnershipOutput"
            ],
            "type": 31
          },
          "selector": "0x11f43efd"
        },
        {
          "args": [],
          "docs": [],
          "label": "PayableMint::max_supply",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "payablemint_external",
              "MaxSupplyOutput"
            ],
            "type": 5
          },
          "selector": "0x37fc025f"
        },
        {
          "args": [],
          "docs": [],
          "label": "PayableMint::price",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "payablemint_external",
              "PriceOutput"
            ],
            "type": 6
          },
          "selector": "0x259e0123"
        },
        {
          "args": [
            {
              "label": "uri",
              "type": {
                "displayName": [
                  "payablemint_external",
                  "SetBaseUriInput1"
                ],
                "type": 33
              }
            }
          ],
          "docs": [],
          "label": "PayableMint::set_base_uri",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "payablemint_external",
              "SetBaseUriOutput"
            ],
            "type": 27
          },
          "selector": "0xa089cf22"
        },
        {
          "args": [],
          "docs": [],
          "label": "PayableMint::withdraw",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "payablemint_external",
              "WithdrawOutput"
            ],
            "type": 27
          },
          "selector": "0x0691ffd2"
        },
        {
          "args": [
            {
              "label": "to",
              "type": {
                "displayName": [
                  "payablemint_external",
                  "MintForInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "mint_amount",
              "type": {
                "displayName": [
                  "payablemint_external",
                  "MintForInput2"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "PayableMint::mint_for",
          "mutates": true,
          "payable": true,
          "returnType": {
            "displayName": [
              "payablemint_external",
              "MintForOutput"
            ],
            "type": 27
          },
          "selector": "0x37f12bac"
        },
        {
          "args": [],
          "docs": [],
          "label": "PayableMint::mint_next",
          "mutates": true,
          "payable": true,
          "returnType": {
            "displayName": [
              "payablemint_external",
              "MintNextOutput"
            ],
            "type": 27
          },
          "selector": "0x122435bc"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "payablemint_external",
                  "TokenUriInput1"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "PayableMint::token_uri",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "payablemint_external",
              "TokenUriOutput"
            ],
            "type": 34
          },
          "selector": "0xad9d6966"
        }
      ]
    },
    "storage": {
      "cell": {
        "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "ty": 0
      }
    },
    "types": [
      {
        "id": 0,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 10
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 1
            },
            {
              "name": "V",
              "type": 8
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 1,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 2,
                      "typeName": "u8"
                    }
                  ],
                  "index": 0,
                  "name": "U8"
                },
                {
                  "fields": [
                    {
                      "type": 3,
                      "typeName": "u16"
                    }
                  ],
                  "index": 1,
                  "name": "U16"
                },
                {
                  "fields": [
                    {
                      "type": 4,
                      "typeName": "u32"
                    }
                  ],
                  "index": 2,
                  "name": "U32"
                },
                {
                  "fields": [
                    {
                      "type": 5,
                      "typeName": "u64"
                    }
                  ],
                  "index": 3,
                  "name": "U64"
                },
                {
                  "fields": [
                    {
                      "type": 6,
                      "typeName": "u128"
                    }
                  ],
                  "index": 4,
                  "name": "U128"
                },
                {
                  "fields": [
                    {
                      "type": 7,
                      "typeName": "Vec<u8>"
                    }
                  ],
                  "index": 5,
                  "name": "Bytes"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "types",
            "Id"
          ]
        }
      },
      {
        "id": 2,
        "type": {
          "def": {
            "primitive": "u8"
          }
        }
      },
      {
        "id": 3,
        "type": {
          "def": {
            "primitive": "u16"
          }
        }
      },
      {
        "id": 4,
        "type": {
          "def": {
            "primitive": "u32"
          }
        }
      },
      {
        "id": 5,
        "type": {
          "def": {
            "primitive": "u64"
          }
        }
      },
      {
        "id": 6,
        "type": {
          "def": {
            "primitive": "u128"
          }
        }
      },
      {
        "id": 7,
        "type": {
          "def": {
            "sequence": {
              "type": 2
            }
          }
        }
      },
      {
        "id": 8,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 9,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_env",
            "types",
            "AccountId"
          ]
        }
      },
      {
        "id": 9,
        "type": {
          "def": {
            "array": {
              "len": 32,
              "type": 2
            }
          }
        }
      },
      {
        "id": 10,
        "type": {
          "def": {
            "sequence": {
              "type": 11
            }
          }
        }
      },
      {
        "id": 11,
        "type": {
          "def": {
            "tuple": [
              1,
              8
            ]
          }
        }
      },
      {
        "id": 12,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 16
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 13
            },
            {
              "name": "V",
              "type": 15
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 13,
        "type": {
          "def": {
            "tuple": [
              8,
              8,
              14
            ]
          }
        }
      },
      {
        "id": 14,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 1
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 1
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 15,
        "type": {
          "def": {
            "tuple": []
          }
        }
      },
      {
        "id": 16,
        "type": {
          "def": {
            "sequence": {
              "type": 17
            }
          }
        }
      },
      {
        "id": 17,
        "type": {
          "def": {
            "tuple": [
              13,
              15
            ]
          }
        }
      },
      {
        "id": 18,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 20
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 19
            },
            {
              "name": "V",
              "type": 1
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "multi_mapping",
            "MultiMapping"
          ]
        }
      },
      {
        "id": 19,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 8
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 8
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 20,
        "type": {
          "def": {
            "sequence": {
              "type": 21
            }
          }
        }
      },
      {
        "id": 21,
        "type": {
          "def": {
            "tuple": [
              19,
              1
            ]
          }
        }
      },
      {
        "id": 22,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 24
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 23
            },
            {
              "name": "V",
              "type": 7
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 23,
        "type": {
          "def": {
            "tuple": [
              1,
              7
            ]
          }
        }
      },
      {
        "id": 24,
        "type": {
          "def": {
            "sequence": {
              "type": 25
            }
          }
        }
      },
      {
        "id": 25,
        "type": {
          "def": {
            "tuple": [
              23,
              7
            ]
          }
        }
      },
      {
        "id": 26,
        "type": {
          "def": {
            "primitive": "bool"
          }
        }
      },
      {
        "id": 27,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 15
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 28
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 15
            },
            {
              "name": "E",
              "type": 28
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 28,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 7,
                      "typeName": "String"
                    }
                  ],
                  "index": 0,
                  "name": "Custom"
                },
                {
                  "index": 1,
                  "name": "SelfApprove"
                },
                {
                  "index": 2,
                  "name": "NotApproved"
                },
                {
                  "index": 3,
                  "name": "TokenExists"
                },
                {
                  "index": 4,
                  "name": "TokenNotExists"
                },
                {
                  "fields": [
                    {
                      "type": 7,
                      "typeName": "String"
                    }
                  ],
                  "index": 5,
                  "name": "SafeTransferCheckFailed"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "errors",
            "psp34",
            "PSP34Error"
          ]
        }
      },
      {
        "id": 29,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 1
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 28
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 1
            },
            {
              "name": "E",
              "type": 28
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 30,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 7
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 7
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 31,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 15
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 32
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 15
            },
            {
              "name": "E",
              "type": 32
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 32,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "CallerIsNotOwner"
                },
                {
                  "index": 1,
                  "name": "NewOwnerIsZero"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "errors",
            "ownable",
            "OwnableError"
          ]
        }
      },
      {
        "id": 33,
        "type": {
          "def": {
            "primitive": "str"
          }
        }
      },
      {
        "id": 34,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 33
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 28
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 33
            },
            {
              "name": "E",
              "type": 28
            }
          ],
          "path": [
            "Result"
          ]
        }
      }
    ]
  }
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export type Event = Event_Transfer | Event_Approval

export interface Event_Transfer {
    __kind: 'Transfer'
    from: (Uint8Array | undefined)
    to: (Uint8Array | undefined)
    id: Id
}

export interface Event_Approval {
    __kind: 'Approval'
    from: Uint8Array
    to: Uint8Array
    id: (Id | undefined)
    approved: boolean
}

export type Message = Message_PSP34::balance_of | Message_PSP34::owner_of | Message_PSP34::allowance | Message_PSP34::approve | Message_PSP34::collection_id | Message_PSP34::total_supply | Message_PSP34::transfer | Message_PSP34Enumerable::token_by_index | Message_PSP34Enumerable::owners_token_by_index | Message_PSP34Metadata::get_attribute | Message_Ownable::owner | Message_Ownable::renounce_ownership | Message_Ownable::transfer_ownership | Message_PayableMint::max_supply | Message_PayableMint::price | Message_PayableMint::set_base_uri | Message_PayableMint::withdraw | Message_PayableMint::mint_for | Message_PayableMint::mint_next | Message_PayableMint::token_uri

/**
 *  Returns the balance of the owner.
 * 
 *  This represents the amount of unique tokens the owner has.
 */
export interface Message_PSP34::balance_of {
    __kind: 'PSP34::balance_of'
    owner: Uint8Array
}

/**
 *  Returns the owner of the token if any.
 */
export interface Message_PSP34::owner_of {
    __kind: 'PSP34::owner_of'
    id: Id
}

/**
 *  Returns `true` if the operator is approved by the owner to withdraw `id` token.
 *  If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens.
 */
export interface Message_PSP34::allowance {
    __kind: 'PSP34::allowance'
    owner: Uint8Array
    operator: Uint8Array
    id: (Id | undefined)
}

/**
 *  Approves `operator` to withdraw the `id` token from the caller's account.
 *  If `id` is `None` approves or disapproves the operator for all tokens of the caller.
 * 
 *  On success a `Approval` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `SelfApprove` error if it is self approve.
 * 
 *  Returns `NotApproved` error if caller is not owner of `id`.
 */
export interface Message_PSP34::approve {
    __kind: 'PSP34::approve'
    operator: Uint8Array
    id: (Id | undefined)
    approved: boolean
}

/**
 *  Returns the collection `Id` of the NFT token.
 * 
 *  This can represents the relationship between tokens/contracts/pallets.
 */
export interface Message_PSP34::collection_id {
    __kind: 'PSP34::collection_id'
}

/**
 *  Returns current NFT total supply.
 */
export interface Message_PSP34::total_supply {
    __kind: 'PSP34::total_supply'
}

/**
 *  Transfer approved or owned token from caller.
 * 
 *  On success a `Transfer` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `TokenNotExists` error if `id` does not exist.
 * 
 *  Returns `NotApproved` error if `from` doesn't have allowance for transferring.
 * 
 *  Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer.
 */
export interface Message_PSP34::transfer {
    __kind: 'PSP34::transfer'
    to: Uint8Array
    id: Id
    data: Uint8Array
}

/**
 *  Returns a token `Id` at a given `index` of all the tokens stored by the contract.
 *  Use along with `total_supply` to enumerate all tokens.
 * 
 *  The start index is zero.
 */
export interface Message_PSP34Enumerable::token_by_index {
    __kind: 'PSP34Enumerable::token_by_index'
    index: bigint
}

/**
 *  Returns a token `Id` owned by `owner` at a given `index` of its token list.
 *  Use along with `balance_of` to enumerate all of ``owner``'s tokens.
 * 
 *  The start index is zero.
 */
export interface Message_PSP34Enumerable::owners_token_by_index {
    __kind: 'PSP34Enumerable::owners_token_by_index'
    owner: Uint8Array
    index: bigint
}

/**
 *  Returns the attribute of `id` for the given `key`.
 * 
 *  If `id` is a collection id of the token, it returns attributes for collection.
 */
export interface Message_PSP34Metadata::get_attribute {
    __kind: 'PSP34Metadata::get_attribute'
    id: Id
    key: Uint8Array
}

/**
 *  Returns the address of the current owner.
 */
export interface Message_Ownable::owner {
    __kind: 'Ownable::owner'
}

/**
 *  Leaves the contract without owner. It will not be possible to call
 *  owner's functions anymore. Can only be called by the current owner.
 * 
 *  NOTE: Renouncing ownership will leave the contract without an owner,
 *  thereby removing any functionality that is only available to the owner.
 * 
 *  On success a `OwnershipTransferred` event is emitted.
 * 
 *  # Errors
 * 
 *  Panics with `CallerIsNotOwner` error if caller is not owner
 */
export interface Message_Ownable::renounce_ownership {
    __kind: 'Ownable::renounce_ownership'
}

/**
 *  Transfers ownership of the contract to a `new_owner`.
 *  Can only be called by the current owner.
 * 
 *  On success a `OwnershipTransferred` event is emitted.
 * 
 *  # Errors
 * 
 *  Panics with `CallerIsNotOwner` error if caller is not owner.
 * 
 *  Panics with `NewOwnerIsZero` error if new owner's address is zero.
 */
export interface Message_Ownable::transfer_ownership {
    __kind: 'Ownable::transfer_ownership'
    newOwner: Uint8Array
}

export interface Message_PayableMint::max_supply {
    __kind: 'PayableMint::max_supply'
}

export interface Message_PayableMint::price {
    __kind: 'PayableMint::price'
}

export interface Message_PayableMint::set_base_uri {
    __kind: 'PayableMint::set_base_uri'
    uri: SetBaseUriInput1
}

export interface Message_PayableMint::withdraw {
    __kind: 'PayableMint::withdraw'
}

export interface Message_PayableMint::mint_for {
    __kind: 'PayableMint::mint_for'
    to: Uint8Array
    mintAmount: bigint
}

export interface Message_PayableMint::mint_next {
    __kind: 'PayableMint::mint_next'
}

export interface Message_PayableMint::token_uri {
    __kind: 'PayableMint::token_uri'
    tokenId: bigint
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    name: Uint8Array
    symbol: Uint8Array
    baseUri: Uint8Array
    maxSupply: bigint
    pricePerMint: bigint
}

export type Id = Id_U8 | Id_U16 | Id_U32 | Id_U64 | Id_U128 | Id_Bytes

export interface Id_U8 {
    __kind: 'U8'
    value: number
}

export interface Id_U16 {
    __kind: 'U16'
    value: number
}

export interface Id_U32 {
    __kind: 'U32'
    value: number
}

export interface Id_U64 {
    __kind: 'U64'
    value: bigint
}

export interface Id_U128 {
    __kind: 'U128'
    value: bigint
}

export interface Id_Bytes {
    __kind: 'Bytes'
    value: Uint8Array
}

export type SetBaseUriInput1 = string

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
