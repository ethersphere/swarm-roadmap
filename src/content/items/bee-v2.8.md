---
title: "Bee v2.8"
subtitle: "Strengthens how nodes verify each other, with P2P hardening and a toolchain refresh."
status: done
---

[Bee v2.8](https://github.com/ethersphere/bee/releases/tag/v2.8.0) strengthens peer verification and hardens the networking layer. It raises the handshake and hive protocols, so it requires a network-wide upgrade — older nodes can no longer handshake with v2.8 nodes.

* Stronger peer address records — a signed timestamp and chequebook address, with the overlay nonce now part of the signature, verified before a record is stored.
* Optional on-chain chequebook verification (opt-in, off by default) before a peer is trusted.
* Caps on peer underlay address lists, keeping handshake and gossip messages bounded.
* Configurable blockchain RPC transport, improved gas estimation, and faster node shutdown.
* Toolchain refresh: Go 1.26 and the latest libp2p.
