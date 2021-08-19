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
        indexed: false,
        internalType: "contract Timelock",
        name: "",
        type: "address",
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
  "0x608060405234801561001057600080fd5b50610ebf806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636acaa16e14610030575b600080fd5b61004361003e366004610116565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b600080868686868660405161007390610109565b6001600160a01b03958616815294909316602085015260408401919091526060830152608082015260a001604051809103906000f0801580156100ba573d6000803e3d6000fd5b506040516001600160a01b038083168252919250908816907f3321739a1b424a786dd69e6418e9f785b6731469f0456a5c8c6523fadaf16ea09060200160405180910390a29695505050505050565b610d0a8061018083390190565b600080600080600060a0868803121561012e57600080fd5b853561013981610167565b9450602086013561014981610167565b94979496505050506040830135926060810135926080909101359150565b6001600160a01b038116811461017c57600080fd5b5056fe61012060405234801561001157600080fd5b50604051610d0a380380610d0a833981016040819052610030916100d8565b6001600160601b0319606085811b82166101005286901b1660e0526080839052428211801561005e57504281115b6100935760405162461bcd60e51b81526020600482015260016024820152603160f81b60448201526064015b60405180910390fd5b8181116100c65760405162461bcd60e51b81526020600482015260016024820152600760fb1b604482015260640161008a565b60c09190915260a05250610143915050565b600080600080600060a086880312156100f057600080fd5b85516100fb8161012b565b602087015190955061010c8161012b565b6040870151606088015160809098015196999198509695945092505050565b6001600160a01b038116811461014057600080fd5b50565b60805160a05160c05160e05160601c6101005160601c610b2b6101df6000396000818160a5015281816102cd015281816104900152818161057d015261066e0152600081816103d201528181610611015261086001526000818161019901526101d101526000818161013e01528181610170015261042601526000818160c9015281816102a701528181610376015261069b0152610b2b6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063dc5f31e01161005b578063dc5f31e014610139578063def1e7ae1461016e578063e3e3acdf14610194578063fdb80774146101bb57600080fd5b80634e71d92d1461008d578063ac91965f14610097578063be04e3d5146100f8578063ce74602414610131575b600080fd5b6100956101ce565b005b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681527f00000000000000000000000000000000000000000000000000000000000000006020820152015b60405180910390f35b6101246101063660046108b6565b6001600160a01b031660009081526020819052604090205460ff1690565b6040516100ef9190610a3b565b6100956103c7565b6101607f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100ef565b7f0000000000000000000000000000000000000000000000000000000000000000610160565b6101607f000000000000000000000000000000000000000000000000000000000000000081565b6100956101c93660046108d8565b610606565b337f00000000000000000000000000000000000000000000000000000000000000004210156102285760405162461bcd60e51b81526020600482015260016024820152603760f81b60448201526064015b60405180910390fd5b60016001600160a01b03821660009081526020819052604090205460ff16600381111561025757610257610ab3565b146102885760405162461bcd60e51b81526020600482015260016024820152601960f91b604482015260640161021f565b60405163a9059cbb60e01b81526001600160a01b0382811660048301527f000000000000000000000000000000000000000000000000000000000000000060248301527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561031157600080fd5b505af1158015610325573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034991906109a4565b506001600160a01b03811660008181526020818152604091829020805460ff1916600217905581519283527f0000000000000000000000000000000000000000000000000000000000000000908301527fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a910160405180910390a150565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104235760405162461bcd60e51b81526020600482015260016024820152603360f81b604482015260640161021f565b337f00000000000000000000000000000000000000000000000000000000000000004210156104785760405162461bcd60e51b81526020600482015260016024820152601b60f91b604482015260640161021f565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b1580156104da57600080fd5b505afa1580156104ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051291906109c6565b604080516001600160a01b0385168152602081018390529192507f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28910160405180910390a160405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f991906109a4565b50816001600160a01b0316ff5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106625760405162461bcd60e51b81526020600482015260016024820152603360f81b604482015260640161021f565b80516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166323b872dd33306106bf857f0000000000000000000000000000000000000000000000000000000000000000610a63565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b15801561070e57600080fd5b505af1158015610722573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074691906109a4565b5060005b8181101561083c576000808085848151811061076857610768610ac9565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1660038111156107a0576107a0610ab3565b146107d15760405162461bcd60e51b81526020600482015260016024820152603960f81b604482015260640161021f565b60016000808584815181106107e8576107e8610ac9565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916600183600381111561082557610825610ab3565b02179055508061083481610a82565b91505061074a565b507fa0cd582431bf0ccaa00246b434e59ebd5f63aa3d856a1d9328e7023b18cc63af7f00000000000000000000000000000000000000000000000000000000000000008360405161088e9291906109df565b60405180910390a15050565b80356001600160a01b03811681146108b157600080fd5b919050565b6000602082840312156108c857600080fd5b6108d18261089a565b9392505050565b600060208083850312156108eb57600080fd5b823567ffffffffffffffff8082111561090357600080fd5b818501915085601f83011261091757600080fd5b81358181111561092957610929610adf565b8060051b604051601f19603f8301168101818110858211171561094e5761094e610adf565b604052828152858101935084860182860187018a101561096d57600080fd5b600095505b83861015610997576109838161089a565b855260019590950194938601938601610972565b5098975050505050505050565b6000602082840312156109b657600080fd5b815180151581146108d157600080fd5b6000602082840312156109d857600080fd5b5051919050565b6001600160a01b038381168252604060208084018290528451918401829052600092858201929091906060860190855b81811015610a2d578551851683529483019491830191600101610a0f565b509098975050505050505050565b6020810160048310610a5d57634e487b7160e01b600052602160045260246000fd5b91905290565b6000816000190483118215151615610a7d57610a7d610a9d565b500290565b6000600019821415610a9657610a96610a9d565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212207d621ad4b74100e9e9ea32044faae6fd6f3f108b6f24c6cef0c54f5c096927ed64736f6c63430008060033a2646970667358221220a829e170a1da90635fffcf7c431930e0c128cc1a162e44f09adf00d61fb2d97464736f6c63430008060033";
