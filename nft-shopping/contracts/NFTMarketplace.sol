// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin libraries for access control and token management
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ArtPlatform  {
    enum User{ VERIFIER , BUYER ,SUPPLIER  }
    struct Artwork {
        string CID; //cid from ipfs
        uint256 price; //price of the artwork
        bool isLimitedEdition;
        bool isAuctioned;
        uint256 auctionEndTime;
        string genre;
        string title;
        uint256 id;
    }
    mapping(address=> User) public getUserType;
    // implement this 
    mapping(address => Artwork) public artworkOfSupplier;
    mapping(uint256=>address) public supplier;
    struct Details {
        string description;
        address[] certificatesOfArtwork;
        uint256[] artworkBids;
        uint256 quantity; // quantity as stock in the marketplace
    }


    Artwork[] public artworks;
    mapping(uint256 => Details) public detailsOfArtwork;
    uint256 public artworkCounter;
    address[] public verifiers;
    mapping(address => User) userType;

    event ArtworkAdded(uint256 indexed artworkId);
    event ArtworkUpdated(uint256 indexed artworkId);
    event ArtworkDeliveryStatusUpdated(uint256 indexed artworkId);
    event ArtworkAuctionStarted(
        uint256 indexed artworkId,
        uint256 auctionEndTime
    );
    event ArtworkBidPlaced(
        uint256 indexed artworkId,
        address indexed bidder,
        uint256 amount
    );
    event ArtworkCertificateIssued(
        uint256 indexed artworkId,
        address indexed verifier
    );
    event NativeTokenRateUpdated(uint256 newRate);

    constructor()  {
        artworkCounter = 0;
    }

    // getters:

    function getAllArtworks() public view returns (Artwork[] memory) {
        return artworks;
    }

    function getCertificateOfArtwork(
        uint256 tokenId
        ) public view returns (address[] memory) {
            return detailsOfArtwork[tokenId].certificatesOfArtwork;
        }

    function getArtworkSupply(uint256 tokenId) public view returns (uint256) {
        return detailsOfArtwork[tokenId].quantity;
    }

    function getArtworkBids(uint256 tokenId) public view returns (uint256[] memory) {
        return detailsOfArtwork[tokenId].artworkBids;
    }
    function getDescription(uint256 tokenId) public view returns (string memory) {
        return detailsOfArtwork[tokenId].description;
    }

    function getArtworkCount() public view returns (uint256) {
        return artworkCounter;
    }

    // TO DO: IMPLEMENT
    // function getUser(address _adderss) public view returns () {
    //     if(userDetails[_address]._type == "") return 
    // }

    function isVerifier(address _address) public view returns (bool) {
        // check if the address belongs to a registered verifier
        return userType[_address] == User.VERIFIER;
    }

    function registerVerifier() public  {
        // Registration logic for verifiers
        // Add your implementation here
        require(!isVerifier(msg.sender), "Already a verifier");
        verifiers.push(msg.sender);
        userType[msg.sender] = User.VERIFIER;
        // emit an event that id has become a verifier.
    }

    function addArtwork(
        string memory _CID,
        uint256 _price,
        uint256 _quantity,
        bool _isLimitedEdition,
        bool _isAuctioned,
        uint256 _auctionEndTime,
        string memory _title,
        string memory _genre ,
        string memory _description
    ) external returns (uint256) {
        //returns the artworkID

        uint256 artworkId = artworkCounter;
        artworkCounter++;

        artworks.push(
            Artwork({
                CID: _CID,
                price: _price,
                isLimitedEdition: _isLimitedEdition,
                isAuctioned: _isAuctioned,
                auctionEndTime: _auctionEndTime,
                title: _title,
                genre: _genre,
                id: artworkId
            })
        );
        supplier[artworkId] = msg.sender;
        // to check when updating supply
        
        detailsOfArtwork[artworkId].quantity = _quantity;
        detailsOfArtwork[artworkId].description = _description;

        emit ArtworkAdded(artworkId);
        // users.push(msg.sender);
        // userDetails[msg.sender].artworks_of_user.push()
        userType[msg.sender]= User.SUPPLIER;
        return artworkId;
    }

    function updateSupplyOfArtWork(
        uint256 artworkId,
        uint256 _addedSupply
    ) public returns (bool) {
        require(
            supplier[artworkId] == msg.sender,
            "You are not the Owner of the Artwork"
        );
        detailsOfArtwork[artworkId].quantity += _addedSupply;
        return true;
    }


    function startArtworkAuction(
        uint256 _artworkId,
        uint256 _auctionEndTime
    ) external onlyArtworkOwner(_artworkId) {
        Artwork storage artwork = artworks[_artworkId];
        require(!artwork.isAuctioned, "Artwork is already auctioned");
        artwork.isAuctioned = true;
        artwork.auctionEndTime = _auctionEndTime;

        emit ArtworkAuctionStarted(_artworkId, _auctionEndTime);
    }

    function placeBid(uint256 _artworkId, uint256 _amount) external {
        Artwork storage artwork = artworks[_artworkId];

        require(artwork.isAuctioned, "Artwork is not available for auction");
        require(block.timestamp < artwork.auctionEndTime, "Auction has ended");
        uint256[] storage  bids = detailsOfArtwork[_artworkId].artworkBids;
        bids.push(_amount); 

        emit ArtworkBidPlaced(_artworkId, msg.sender, _amount);
    }

    function issueCertificate(uint256 _artworkId) public onlyVerifier {
        Details storage details = detailsOfArtwork[_artworkId];
        details.certificatesOfArtwork.push(msg.sender);
        emit ArtworkCertificateIssued(_artworkId, msg.sender);
    }

    // modifiers

    modifier onlyArtworkOwner(uint256 _artworkId) {
        require(
            msg.sender == supplier[_artworkId],
            "Only artwork owner can perform this action"
        );
        _;
    }

    modifier onlyVerifier() {
        require(
            isVerifier(msg.sender),
            "Only verifiers can perform this action"
        );
        _;
    }
}
