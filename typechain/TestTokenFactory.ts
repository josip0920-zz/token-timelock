/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestToken } from "./TestToken";

export class TestTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestToken> {
    return super.deploy(overrides || {}) as Promise<TestToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  connect(signer: Signer): TestTokenFactory {
    return super.connect(signer) as TestTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260098152682a32b9ba2a37b5b2b760b91b602080830191825283518085019094526004845263151154d560e21b9084015281519192916200005f916003916200017a565b508051620000759060049060208401906200017a565b5050506200008c336127106200009260201b60201c565b62000284565b6001600160a01b038216620000ed5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000101919062000220565b90915550506001600160a01b038216600090815260208190526040812080548392906200013090849062000220565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001889062000247565b90600052602060002090601f016020900481019282620001ac5760008555620001f7565b82601f10620001c757805160ff1916838001178555620001f7565b82800160010185558215620001f7579182015b82811115620001f7578251825591602001919060010190620001da565b506200020592915062000209565b5090565b5b808211156200020557600081556001016200020a565b600082198211156200024257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200025c57607f821691505b602082108114156200027e57634e487b7160e01b600052602260045260246000fd5b50919050565b6109d980620002946000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c806306fdde03146100a9578063095ea7b3146100c757806318160ddd146100ea57806323b872dd146100fc578063313ce5671461010f578063395093511461011e57806370a082311461013157806395d89b411461015a578063a0712d6814610162578063a457c2d714610177578063a9059cbb1461018a578063dd62ed3e1461019d575b600080fd5b6100b16101d6565b6040516100be91906108ed565b60405180910390f35b6100da6100d53660046108aa565b610268565b60405190151581526020016100be565b6002545b6040519081526020016100be565b6100da61010a36600461086e565b61027e565b604051601281526020016100be565b6100da61012c3660046108aa565b61032d565b6100ee61013f366004610819565b6001600160a01b031660009081526020819052604090205490565b6100b1610369565b6101756101703660046108d4565b610378565b005b6100da6101853660046108aa565b610385565b6100da6101983660046108aa565b61041e565b6100ee6101ab36600461083b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101e590610968565b80601f016020809104026020016040519081016040528092919081815260200182805461021190610968565b801561025e5780601f106102335761010080835404028352916020019161025e565b820191906000526020600020905b81548152906001019060200180831161024157829003601f168201915b5050505050905090565b600061027533848461042b565b50600192915050565b600061028b84848461054f565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103155760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610322853385840361042b565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610275918590610364908690610942565b61042b565b6060600480546101e590610968565b610382338261071e565b50565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104075760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161030c565b610414338585840361042b565b5060019392505050565b600061027533848461054f565b6001600160a01b03831661048d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161030c565b6001600160a01b0382166104ee5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161030c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105b35760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161030c565b6001600160a01b0382166106155760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161030c565b6001600160a01b0383166000908152602081905260409020548181101561068d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161030c565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106c4908490610942565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161071091815260200190565b60405180910390a350505050565b6001600160a01b0382166107745760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161030c565b80600260008282546107869190610942565b90915550506001600160a01b038216600090815260208190526040812080548392906107b3908490610942565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b038116811461081457600080fd5b919050565b60006020828403121561082b57600080fd5b610834826107fd565b9392505050565b6000806040838503121561084e57600080fd5b610857836107fd565b9150610865602084016107fd565b90509250929050565b60008060006060848603121561088357600080fd5b61088c846107fd565b925061089a602085016107fd565b9150604084013590509250925092565b600080604083850312156108bd57600080fd5b6108c6836107fd565b946020939093013593505050565b6000602082840312156108e657600080fd5b5035919050565b600060208083528351808285015260005b8181101561091a578581018301518582016040015282016108fe565b8181111561092c576000604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561096357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061097c57607f821691505b6020821081141561099d57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a8b48cb29ccfa24b67c6de430e9a010fcaa4ba53b030cf3775a1990404b5508c64736f6c63430008060033";
