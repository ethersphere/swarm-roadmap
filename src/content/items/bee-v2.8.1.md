---
title: "Bee v2.8.1"
subtitle: "Crash-safe storage, client-side stamp signing for browser uploads, and performance improvements."
status: in-progress
---

Bee v2.8.1 is a non-disruptive release (no breaking P2P changes) focused on durability, browser uploads, and efficiency. Node operators should upgrade.

* Crash-safe local storage — chunks are validated against their content hashes on recovery, and corrupted ones are removed.
* Client-side postage stamp signing — browsers can upload directly to Swarm without sharing keys with a node.
* Performance — opt-in SIMD-accelerated hashing (Linux x86-64), reused handshake records, and fewer RPC calls via local block-time estimates.
* New API endpoints — batch lookup (`GET /batches/{id}`), batch label updates (`PATCH /stamps/{id}`), and chainstate validity data.
* Removed `bee dev` (use Bee Factory or Sepolia); nodes on v2.6.0 must upgrade via v2.8.0 first.
