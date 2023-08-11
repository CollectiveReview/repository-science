# what is this document for?
This proposal of repository science consists of three components.
- Problem Statement （学術の現状の課題=前提）
- **Solution Concept  (解決策を概念的に提示したもの)** 👈
- Application Guidelines（実装上の提案）

This document elaborates on **solution concept**.

# Terminology
- **repository** - a versioned directory consist of body and dependency
- **body** - multi-paragraph text with embedded data
- **dependency** - a list of external link utilized in the repository's body
- **letter** - information about addition, deletion, and modification of body and dependency sent from a researcher to repository owner
- **clone** - creating a copy of a repository in a user's local storage
- **submit** - sending a letter to the repository owner
- **author**

# Explanation
Each repository represents a research project. The repository's title usually reflects the corresponding research question.
A repository's versions are semantic, comprising major, minor and patches.
Patch番号：バグ修正の時にインクリメントする番号です。 in repository science it usually changes with correcting a typo, adding a dependency, and formatting.
Minor番号：後方互換性がある変更の時にインクリメントする番号です。in repository science it usually changes with owner accepting those minor letters.
Major番号：後方互換性がない変更の時にインクリメントする番号です。in repository science it usually changes with accepting a disrupting letters such as a new machine learning SoTA algorhithm proposed on a repository about distinguishing objects.
**Versioning is only required for an author who intends their repository to attain 'public acceptance,' paralleling the process of traditional publishing.**
The rule of semantic versioning is stated [here]
Body is equivalent to published paper's version of a paper.
Every link in dependency can refer to data - includes but not confined to - texts, videos, databases, web pages, tweets, code snippets, and other repositories.
Dependency can be transferred to one repository to another. It only copies the link and not the original (shallow copy).


# Effect on Push citation
A mechanism for reviewing knowledge should be able to measure impact and validity of research result.
Collective review can quantify the two quolity by push citation, under repository-science.

Impact is the number of clones the repository received.

Validity is the number of other repositories listing the repository in their dependency. 
