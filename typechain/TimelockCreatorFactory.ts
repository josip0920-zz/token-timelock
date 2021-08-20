/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TimelockCreator } from "./TimelockCreator";

export class TimelockCreatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TimelockCreator> {
    return super.deploy(overrides || {}) as Promise<TimelockCreator>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimelockCreator {
    return super.attach(address) as TimelockCreator;
  }
  connect(signer: Signer): TimelockCreatorFactory {
    return super.connect(signer) as TimelockCreatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockCreator {
    return new Contract(address, _abi, signerOrProvider) as TimelockCreator;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract Timelock",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "CreatedTimelockContract",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "payoutAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "recoverTimestamp",
        type: "uint256",
      },
    ],
    name: "createTimelock",
    outputs: [
      {
        internalType: "contract Timelock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611035806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636acaa16e14610030575b600080fd5b61004361003e366004610126565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b600080868686868660405161007390610119565b6001600160a01b03958616815294909316602085015260408401919091526060830152608082015260a001604051809103906000f0801580156100ba573d6000803e3d6000fd5b5060408051878152602081018790529081018590529091506001600160a01b0380831691908916907f4b4ae6657115b65541e2282bdb779afb0c0554f3165ee123656b52053a8312f29060600160405180910390a39695505050505050565b610e708061019083390190565b600080600080600060a0868803121561013e57600080fd5b853561014981610177565b9450602086013561015981610177565b94979496505050506040830135926060810135926080909101359150565b6001600160a01b038116811461018c57600080fd5b5056fe61012060405234801561001157600080fd5b50604051610e70380380610e70833981016040819052610030916100d8565b6001600160601b0319606085811b82166101005286901b1660e0526080839052428211801561005e57504281115b6100935760405162461bcd60e51b81526020600482015260016024820152603160f81b60448201526064015b60405180910390fd5b8181116100c65760405162461bcd60e51b81526020600482015260016024820152600760fb1b604482015260640161008a565b60c09190915260a05250610143915050565b600080600080600060a086880312156100f057600080fd5b85516100fb8161012b565b602087015190955061010c8161012b565b6040870151606088015160809098015196999198509695945092505050565b6001600160a01b038116811461014057600080fd5b50565b60805160a05160c05160e05160601c6101005160601c610c7c6101f46000396000818160a5015281816102cd015281816104900152818161057d015281816106fe01526107bf0152600081816103d20152818161061101526109b101526000818161017001528181610199015281816101d1015261066501526000818161013e015261042601526000818160c9015281816102a701528181610376015281816106b801526107ec0152610c7c6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063dc5f31e01161005b578063dc5f31e014610139578063def1e7ae1461016e578063e3e3acdf14610194578063fdb80774146101bb57600080fd5b80634e71d92d1461008d578063ac91965f14610097578063be04e3d5146100f8578063ce74602414610131575b600080fd5b6100956101ce565b005b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681527f00000000000000000000000000000000000000000000000000000000000000006020820152015b60405180910390f35b610124610106366004610a07565b6001600160a01b031660009081526020819052604090205460ff1690565b6040516100ef9190610b8c565b6100956103c7565b6101607f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100ef565b7f0000000000000000000000000000000000000000000000000000000000000000610160565b6101607f000000000000000000000000000000000000000000000000000000000000000081565b6100956101c9366004610a29565b610606565b337f00000000000000000000000000000000000000000000000000000000000000004210156102285760405162461bcd60e51b81526020600482015260016024820152603760f81b60448201526064015b60405180910390fd5b60016001600160a01b03821660009081526020819052604090205460ff16600281111561025757610257610c04565b146102885760405162461bcd60e51b81526020600482015260016024820152601960f91b604482015260640161021f565b60405163a9059cbb60e01b81526001600160a01b0382811660048301527f000000000000000000000000000000000000000000000000000000000000000060248301527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561031157600080fd5b505af1158015610325573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103499190610af5565b506001600160a01b03811660008181526020818152604091829020805460ff1916600217905581519283527f0000000000000000000000000000000000000000000000000000000000000000908301527fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a910160405180910390a150565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104235760405162461bcd60e51b81526020600482015260016024820152603360f81b604482015260640161021f565b337f00000000000000000000000000000000000000000000000000000000000000004210156104785760405162461bcd60e51b81526020600482015260016024820152601b60f91b604482015260640161021f565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b1580156104da57600080fd5b505afa1580156104ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105129190610b17565b604080516001600160a01b0385168152602081018390529192507f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28910160405180910390a160405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f99190610af5565b50816001600160a01b0316ff5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106625760405162461bcd60e51b81526020600482015260016024820152603360f81b604482015260640161021f565b427f0000000000000000000000000000000000000000000000000000000000000000116106b65760405162461bcd60e51b8152602060048201526002602482015261031360f41b604482015260640161021f565b7f000000000000000000000000000000000000000000000000000000000000000081516106e39190610bb4565b604051636eb1769f60e11b81523360048201523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dd62ed3e9060440160206040518083038186803b15801561074857600080fd5b505afa15801561075c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107809190610b17565b10156107b35760405162461bcd60e51b8152602060048201526002602482015261313160f01b604482015260640161021f565b80516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166323b872dd3330610810857f0000000000000000000000000000000000000000000000000000000000000000610bb4565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b15801561085f57600080fd5b505af1158015610873573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108979190610af5565b5060005b8181101561098d57600080808584815181106108b9576108b9610c1a565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1660028111156108f1576108f1610c04565b146109225760405162461bcd60e51b81526020600482015260016024820152603960f81b604482015260640161021f565b600160008085848151811061093957610939610c1a565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916600183600281111561097657610976610c04565b02179055508061098581610bd3565b91505061089b565b507fa0cd582431bf0ccaa00246b434e59ebd5f63aa3d856a1d9328e7023b18cc63af7f0000000000000000000000000000000000000000000000000000000000000000836040516109df929190610b30565b60405180910390a15050565b80356001600160a01b0381168114610a0257600080fd5b919050565b600060208284031215610a1957600080fd5b610a22826109eb565b9392505050565b60006020808385031215610a3c57600080fd5b823567ffffffffffffffff80821115610a5457600080fd5b818501915085601f830112610a6857600080fd5b813581811115610a7a57610a7a610c30565b8060051b604051601f19603f83011681018181108582111715610a9f57610a9f610c30565b604052828152858101935084860182860187018a1015610abe57600080fd5b600095505b83861015610ae857610ad4816109eb565b855260019590950194938601938601610ac3565b5098975050505050505050565b600060208284031215610b0757600080fd5b81518015158114610a2257600080fd5b600060208284031215610b2957600080fd5b5051919050565b6001600160a01b038381168252604060208084018290528451918401829052600092858201929091906060860190855b81811015610b7e578551851683529483019491830191600101610b60565b509098975050505050505050565b6020810160038310610bae57634e487b7160e01b600052602160045260246000fd5b91905290565b6000816000190483118215151615610bce57610bce610bee565b500290565b6000600019821415610be757610be7610bee565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c7c958e435bd70a639e00551a45a440a72bfcee625549487b95e1c7bceba3d5164736f6c63430008060033a26469706673582212203ef9ad3357045656da62dcdadee7967620007d16fb6e594341996dcbab70a5f164736f6c63430008060033";
