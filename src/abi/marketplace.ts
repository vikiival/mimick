import {Abi} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xedf9dde8b7c52a23ef3972268217a92f3c356707388aaa68a3952e31973797c3",
    "language": "ink! 3.4.0",
    "compiler": "rustc 1.67.0-nightly"
  },
  "contract": {
    "name": "marketplace",
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
              "label": "market_fee_recipient",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 0
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
      "events": [],
      "messages": [
        {
          "args": [
            {
              "label": "contract_address",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "UnlistInput1"
                ],
                "type": 0
              }
            },
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "UnlistInput2"
                ],
                "type": 12
              }
            }
          ],
          "docs": [
            " Removes a NFT from the marketplace sale."
          ],
          "label": "MarketplaceSale::unlist",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "UnlistOutput"
            ],
            "type": 20
          },
          "selector": "0x0e02ef2c"
        },
        {
          "args": [
            {
              "label": "contract_address",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "RegisterInput1"
                ],
                "type": 0
              }
            },
            {
              "label": "royalty_receiver",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "RegisterInput2"
                ],
                "type": 0
              }
            },
            {
              "label": "royalty",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "RegisterInput3"
                ],
                "type": 7
              }
            },
            {
              "label": "marketplace_ipfs",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "RegisterInput4"
                ],
                "type": 6
              }
            }
          ],
          "docs": [
            " Registers NFT collection to the marketplace."
          ],
          "label": "MarketplaceSale::register",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "RegisterOutput"
            ],
            "type": 20
          },
          "selector": "0x8b3b40f3"
        },
        {
          "args": [
            {
              "label": "contract_address",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "BuyInput1"
                ],
                "type": 0
              }
            },
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "BuyInput2"
                ],
                "type": 12
              }
            }
          ],
          "docs": [
            " Buys NFT item from the marketplace."
          ],
          "label": "MarketplaceSale::buy",
          "mutates": true,
          "payable": true,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "BuyOutput"
            ],
            "type": 20
          },
          "selector": "0xdbdb7c1d"
        },
        {
          "args": [
            {
              "label": "fee",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "SetMarketplaceFeeInput1"
                ],
                "type": 7
              }
            }
          ],
          "docs": [
            " Sets the marketplace fee."
          ],
          "label": "MarketplaceSale::set_marketplace_fee",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "SetMarketplaceFeeOutput"
            ],
            "type": 20
          },
          "selector": "0x56e9ac75"
        },
        {
          "args": [
            {
              "label": "fee_recipient",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "SetFeeRecipientInput1"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Sets the marketplace fee recipient."
          ],
          "label": "MarketplaceSale::set_fee_recipient",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "SetFeeRecipientOutput"
            ],
            "type": 20
          },
          "selector": "0x1d09a9b4"
        },
        {
          "args": [
            {
              "label": "contract_address",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "GetPriceInput1"
                ],
                "type": 0
              }
            },
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "GetPriceInput2"
                ],
                "type": 12
              }
            }
          ],
          "docs": [
            " Checks if NFT token is listed on the marketplace and returns token price."
          ],
          "label": "MarketplaceSale::get_price",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "GetPriceOutput"
            ],
            "type": 24
          },
          "selector": "0x7508d5eb"
        },
        {
          "args": [
            {
              "label": "contract_address",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "ListInput1"
                ],
                "type": 0
              }
            },
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "ListInput2"
                ],
                "type": 12
              }
            },
            {
              "label": "price",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "ListInput3"
                ],
                "type": 15
              }
            }
          ],
          "docs": [
            " Creates a NFT item sale on the marketplace."
          ],
          "label": "MarketplaceSale::list",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "ListOutput"
            ],
            "type": 20
          },
          "selector": "0x9aea6f9e"
        },
        {
          "args": [
            {
              "label": "marketplace_ipfs",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput1"
                ],
                "type": 6
              }
            },
            {
              "label": "royalty_receiver",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput2"
                ],
                "type": 0
              }
            },
            {
              "label": "royalty",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput3"
                ],
                "type": 7
              }
            },
            {
              "label": "nft_name",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput4"
                ],
                "type": 6
              }
            },
            {
              "label": "nft_symbol",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput5"
                ],
                "type": 6
              }
            },
            {
              "label": "nft_base_uri",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput6"
                ],
                "type": 6
              }
            },
            {
              "label": "nft_max_supply",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput7"
                ],
                "type": 14
              }
            },
            {
              "label": "nft_price_per_mint",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "FactoryInput8"
                ],
                "type": 15
              }
            }
          ],
          "docs": [
            " Adds a NFT contract to the marketplace."
          ],
          "label": "MarketplaceSale::factory",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "FactoryOutput"
            ],
            "type": 25
          },
          "selector": "0x5c479c97"
        },
        {
          "args": [],
          "docs": [
            " Gets max fee that can be applied to an item price."
          ],
          "label": "MarketplaceSale::get_max_fee",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "GetMaxFeeOutput"
            ],
            "type": 7
          },
          "selector": "0x65f6e5cb"
        },
        {
          "args": [
            {
              "label": "contract_address",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "GetRegisteredCollectionInput1"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Gets registered collection."
          ],
          "label": "MarketplaceSale::get_registered_collection",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "GetRegisteredCollectionOutput"
            ],
            "type": 26
          },
          "selector": "0x300696d9"
        },
        {
          "args": [],
          "docs": [
            " Gets the marketplace fee."
          ],
          "label": "MarketplaceSale::get_marketplace_fee",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "GetMarketplaceFeeOutput"
            ],
            "type": 7
          },
          "selector": "0xd670d2c9"
        },
        {
          "args": [
            {
              "label": "contract_hash",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "SetNftContractHashInput1"
                ],
                "type": 19
              }
            }
          ],
          "docs": [
            " Sets a hash of a Shiden34 contract to be instantiated by factory call."
          ],
          "label": "MarketplaceSale::set_nft_contract_hash",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "SetNftContractHashOutput"
            ],
            "type": 20
          },
          "selector": "0xe4d9f02e"
        },
        {
          "args": [],
          "docs": [
            " Gets the marketplace fee recipient."
          ],
          "label": "MarketplaceSale::get_fee_recipient",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "GetFeeRecipientOutput"
            ],
            "type": 0
          },
          "selector": "0xa8f2f9a7"
        },
        {
          "args": [
            {
              "label": "contract_address",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "SetContractMetadataInput1"
                ],
                "type": 0
              }
            },
            {
              "label": "ipfs",
              "type": {
                "displayName": [
                  "marketplacesale_external",
                  "SetContractMetadataInput2"
                ],
                "type": 6
              }
            }
          ],
          "docs": [
            " Sets contract metadata (ipfs url)"
          ],
          "label": "MarketplaceSale::set_contract_metadata",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "SetContractMetadataOutput"
            ],
            "type": 20
          },
          "selector": "0x8c3fd1c7"
        },
        {
          "args": [],
          "docs": [
            " Gets Shiden34 contract hash."
          ],
          "label": "MarketplaceSale::nft_contract_hash",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "marketplacesale_external",
              "NftContractHashOutput"
            ],
            "type": 19
          },
          "selector": "0x2a0d765f"
        }
      ]
    },
    "storage": {
      "struct": {
        "fields": [
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xb36ee29c00000000000000000000000000000000000000000000000000000000",
                        "ty": 0
                      }
                    },
                    "name": "owner"
                  },
                  {
                    "layout": {
                      "enum": {
                        "dispatchKey": "0xb46ee29c00000000000000000000000000000000000000000000000000000000",
                        "variants": {
                          "0": {
                            "fields": [
                              {
                                "layout": {
                                  "cell": {
                                    "key": "0xb56ee29c00000000000000000000000000000000000000000000000000000000",
                                    "ty": 3
                                  }
                                },
                                "name": null
                              }
                            ]
                          },
                          "1": {
                            "fields": []
                          }
                        }
                      }
                    },
                    "name": "_reserved"
                  }
                ]
              }
            },
            "name": "ownable"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xf9c17de900000000000000000000000000000000000000000000000000000000",
                        "ty": 2
                      }
                    },
                    "name": "status"
                  },
                  {
                    "layout": {
                      "enum": {
                        "dispatchKey": "0xfac17de900000000000000000000000000000000000000000000000000000000",
                        "variants": {
                          "0": {
                            "fields": [
                              {
                                "layout": {
                                  "cell": {
                                    "key": "0xfbc17de900000000000000000000000000000000000000000000000000000000",
                                    "ty": 3
                                  }
                                },
                                "name": null
                              }
                            ]
                          },
                          "1": {
                            "fields": []
                          }
                        }
                      }
                    },
                    "name": "_reserved"
                  }
                ]
              }
            },
            "name": "guard"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xd93aa84200000000000000000000000000000000000000000000000000000000",
                        "ty": 4
                      }
                    },
                    "name": "registered_collections"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xda3aa84200000000000000000000000000000000000000000000000000000000",
                        "ty": 10
                      }
                    },
                    "name": "items"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xdb3aa84200000000000000000000000000000000000000000000000000000000",
                        "ty": 7
                      }
                    },
                    "name": "fee"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xdc3aa84200000000000000000000000000000000000000000000000000000000",
                        "ty": 7
                      }
                    },
                    "name": "max_fee"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xdd3aa84200000000000000000000000000000000000000000000000000000000",
                        "ty": 0
                      }
                    },
                    "name": "market_fee_recipient"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xde3aa84200000000000000000000000000000000000000000000000000000000",
                        "ty": 19
                      }
                    },
                    "name": "nft_contract_hash"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xdf3aa84200000000000000000000000000000000000000000000000000000000",
                        "ty": 14
                      }
                    },
                    "name": "nonce"
                  }
                ]
              }
            },
            "name": "marketplace"
          }
        ]
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
                  "type": 1,
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
        "id": 1,
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
            "tuple": []
          }
        }
      },
      {
        "id": 4,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 8
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 0
            },
            {
              "name": "V",
              "type": 5
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
        "id": 5,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "royalty_receiver",
                  "type": 0,
                  "typeName": "AccountId"
                },
                {
                  "name": "marketplace_ipfs",
                  "type": 6,
                  "typeName": "String"
                },
                {
                  "name": "royalty",
                  "type": 7,
                  "typeName": "u16"
                }
              ]
            }
          },
          "path": [
            "pallet_marketplace",
            "impls",
            "marketplace",
            "types",
            "RegisteredCollection"
          ]
        }
      },
      {
        "id": 6,
        "type": {
          "def": {
            "sequence": {
              "type": 2
            }
          }
        }
      },
      {
        "id": 7,
        "type": {
          "def": {
            "primitive": "u16"
          }
        }
      },
      {
        "id": 8,
        "type": {
          "def": {
            "sequence": {
              "type": 9
            }
          }
        }
      },
      {
        "id": 9,
        "type": {
          "def": {
            "tuple": [
              0,
              5
            ]
          }
        }
      },
      {
        "id": 10,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 17
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 11
            },
            {
              "name": "V",
              "type": 16
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
        "id": 11,
        "type": {
          "def": {
            "tuple": [
              0,
              12
            ]
          }
        }
      },
      {
        "id": 12,
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
                      "type": 7,
                      "typeName": "u16"
                    }
                  ],
                  "index": 1,
                  "name": "U16"
                },
                {
                  "fields": [
                    {
                      "type": 13,
                      "typeName": "u32"
                    }
                  ],
                  "index": 2,
                  "name": "U32"
                },
                {
                  "fields": [
                    {
                      "type": 14,
                      "typeName": "u64"
                    }
                  ],
                  "index": 3,
                  "name": "U64"
                },
                {
                  "fields": [
                    {
                      "type": 15,
                      "typeName": "u128"
                    }
                  ],
                  "index": 4,
                  "name": "U128"
                },
                {
                  "fields": [
                    {
                      "type": 6,
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
        "id": 13,
        "type": {
          "def": {
            "primitive": "u32"
          }
        }
      },
      {
        "id": 14,
        "type": {
          "def": {
            "primitive": "u64"
          }
        }
      },
      {
        "id": 15,
        "type": {
          "def": {
            "primitive": "u128"
          }
        }
      },
      {
        "id": 16,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "owner",
                  "type": 0,
                  "typeName": "AccountId"
                },
                {
                  "name": "price",
                  "type": 15,
                  "typeName": "Balance"
                }
              ]
            }
          },
          "path": [
            "pallet_marketplace",
            "impls",
            "marketplace",
            "types",
            "Item"
          ]
        }
      },
      {
        "id": 17,
        "type": {
          "def": {
            "sequence": {
              "type": 18
            }
          }
        }
      },
      {
        "id": 18,
        "type": {
          "def": {
            "tuple": [
              11,
              16
            ]
          }
        }
      },
      {
        "id": 19,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 1,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_env",
            "types",
            "Hash"
          ]
        }
      },
      {
        "id": 20,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 3
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 21
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
              "type": 3
            },
            {
              "name": "E",
              "type": 21
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 21,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 22,
                      "typeName": "OwnableError"
                    }
                  ],
                  "index": 0,
                  "name": "OwnableError"
                },
                {
                  "fields": [
                    {
                      "type": 23,
                      "typeName": "ReentrancyGuardError"
                    }
                  ],
                  "index": 1,
                  "name": "ReentrancyError"
                },
                {
                  "index": 2,
                  "name": "NotOwner"
                },
                {
                  "index": 3,
                  "name": "ItemNotFound"
                },
                {
                  "index": 4,
                  "name": "ItemNotListedForSale"
                },
                {
                  "index": 5,
                  "name": "NotRegisteredContract"
                },
                {
                  "index": 6,
                  "name": "BadBuyValue"
                },
                {
                  "index": 7,
                  "name": "TransferToMarketplaceFailed"
                },
                {
                  "index": 8,
                  "name": "TransferToOwnerFailed"
                },
                {
                  "index": 9,
                  "name": "TransferToAuthorFailed"
                },
                {
                  "index": 10,
                  "name": "ContractAlreadyRegistered"
                },
                {
                  "index": 11,
                  "name": "FeeTooHigh"
                },
                {
                  "index": 12,
                  "name": "UnableToTransferToken"
                },
                {
                  "index": 13,
                  "name": "NftContractHashNotSet"
                },
                {
                  "index": 14,
                  "name": "PSP34InstantiationFailed"
                },
                {
                  "index": 15,
                  "name": "AlreadyOwner"
                },
                {
                  "index": 16,
                  "name": "TokenDoesNotExist"
                },
                {
                  "index": 17,
                  "name": "ItemAlreadyListedForSale"
                }
              ]
            }
          },
          "path": [
            "pallet_marketplace",
            "impls",
            "marketplace",
            "types",
            "MarketplaceError"
          ]
        }
      },
      {
        "id": 22,
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
        "id": 23,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "ReentrantCall"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "errors",
            "reentrancy_guard",
            "ReentrancyGuardError"
          ]
        }
      },
      {
        "id": 24,
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
                      "type": 15
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
              "type": 15
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 25,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 0
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 21
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
              "type": 0
            },
            {
              "name": "E",
              "type": 21
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 26,
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
                      "type": 5
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
              "type": 5
            }
          ],
          "path": [
            "Option"
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

export type Event = any

export type Message = Message_MarketplaceSale_unlist | Message_MarketplaceSale_register | Message_MarketplaceSale_buy | Message_MarketplaceSale_set_marketplace_fee | Message_MarketplaceSale_set_fee_recipient | Message_MarketplaceSale_get_price | Message_MarketplaceSale_list | Message_MarketplaceSale_factory | Message_MarketplaceSale_get_max_fee | Message_MarketplaceSale_get_registered_collection | Message_MarketplaceSale_get_marketplace_fee | Message_MarketplaceSale_set_nft_contract_hash | Message_MarketplaceSale_get_fee_recipient | Message_MarketplaceSale_set_contract_metadata | Message_MarketplaceSale_nft_contract_hash

/**
 *  Removes a NFT from the marketplace sale.
 */
export interface Message_MarketplaceSale_unlist {
    __kind: 'MarketplaceSale_unlist'
    contractAddress: Uint8Array
    tokenId: Id
}

/**
 *  Registers NFT collection to the marketplace.
 */
export interface Message_MarketplaceSale_register {
    __kind: 'MarketplaceSale_register'
    contractAddress: Uint8Array
    royaltyReceiver: Uint8Array
    royalty: number
    marketplaceIpfs: Uint8Array
}

/**
 *  Buys NFT item from the marketplace.
 */
export interface Message_MarketplaceSale_buy {
    __kind: 'MarketplaceSale_buy'
    contractAddress: Uint8Array
    tokenId: Id
}

/**
 *  Sets the marketplace fee.
 */
export interface Message_MarketplaceSale_set_marketplace_fee {
    __kind: 'MarketplaceSale_set_marketplace_fee'
    fee: number
}

/**
 *  Sets the marketplace fee recipient.
 */
export interface Message_MarketplaceSale_set_fee_recipient {
    __kind: 'MarketplaceSale_set_fee_recipient'
    feeRecipient: Uint8Array
}

/**
 *  Checks if NFT token is listed on the marketplace and returns token price.
 */
export interface Message_MarketplaceSale_get_price {
    __kind: 'MarketplaceSale_get_price'
    contractAddress: Uint8Array
    tokenId: Id
}

/**
 *  Creates a NFT item sale on the marketplace.
 */
export interface Message_MarketplaceSale_list {
    __kind: 'MarketplaceSale_list'
    contractAddress: Uint8Array
    tokenId: Id
    price: bigint
}

/**
 *  Adds a NFT contract to the marketplace.
 */
export interface Message_MarketplaceSale_factory {
    __kind: 'MarketplaceSale_factory'
    marketplaceIpfs: Uint8Array
    royaltyReceiver: Uint8Array
    royalty: number
    nftName: Uint8Array
    nftSymbol: Uint8Array
    nftBaseUri: Uint8Array
    nftMaxSupply: FactoryInput7
    nftPricePerMint: bigint
}

/**
 *  Gets max fee that can be applied to an item price.
 */
export interface Message_MarketplaceSale_get_max_fee {
    __kind: 'MarketplaceSale_get_max_fee'
}

/**
 *  Gets registered collection.
 */
export interface Message_MarketplaceSale_get_registered_collection {
    __kind: 'MarketplaceSale_get_registered_collection'
    contractAddress: Uint8Array
}

/**
 *  Gets the marketplace fee.
 */
export interface Message_MarketplaceSale_get_marketplace_fee {
    __kind: 'MarketplaceSale_get_marketplace_fee'
}

/**
 *  Sets a hash of a Shiden34 contract to be instantiated by factory call.
 */
export interface Message_MarketplaceSale_set_nft_contract_hash {
    __kind: 'MarketplaceSale_set_nft_contract_hash'
    contractHash: SetNftContractHashInput1
}

/**
 *  Gets the marketplace fee recipient.
 */
export interface Message_MarketplaceSale_get_fee_recipient {
    __kind: 'MarketplaceSale_get_fee_recipient'
}

/**
 *  Sets contract metadata (ipfs url)
 */
export interface Message_MarketplaceSale_set_contract_metadata {
    __kind: 'MarketplaceSale_set_contract_metadata'
    contractAddress: Uint8Array
    ipfs: Uint8Array
}

/**
 *  Gets Shiden34 contract hash.
 */
export interface Message_MarketplaceSale_nft_contract_hash {
    __kind: 'MarketplaceSale_nft_contract_hash'
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    marketFeeRecipient: Uint8Array
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
    value: FactoryInput7
}

export interface Id_U128 {
    __kind: 'U128'
    value: bigint
}

export interface Id_Bytes {
    __kind: 'Bytes'
    value: Uint8Array
}

export type FactoryInput7 = bigint

export type SetNftContractHashInput1 = Uint8Array

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}