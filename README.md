# BoilerKit - Instantly Insert Boilerplate Code

BoilerKit provides ready-to-use boilerplate code for **30+ languages** with just a snippet trigger. No configuration, no fluff – just pure productivity.

Just type a trigger like `cppboiler`, `pyboiler`, `jsxboiler` and hit `Enter`.

### Features
- Supports 30+ languages and frameworks
- Supports popular languages: C++, Python, JavaScript, HTML, Rust, Go, and more
- Consistent snippet naming: cppboiler, pyboiler, jsboiler, etc.
- Type less, code more with quick snippets
- Works out of the box – no config needed

### Usage
1. Open a new file like `main.cpp` or `main.py`
2. Type: `cppboiler`, `pyboiler`, etc.
3. Hit `Enter` to insert code

### Supported Languages (Examples)

| Language     | Trigger         | Language    | Trigger         |
| ------------ | --------------- | ----------- | --------------- |
| C++          | `cppboiler`     | Swift       | `swiftboiler`   |
| Python       | `pyboiler`      | Kotlin      | `kotlinboiler`  |
| JavaScript   | `jsboiler`      | C#          | `csboiler`      |
| TypeScript   | `tsboiler`      | Dart        | `dartboiler`    |
| Java         | `javaboiler`    | Scala       | `scalaboiler`   |
| C            | `cboiler`       | R           | `rboiler`       |
| Go           | `goboiler`      | MATLAB      | `matlabboiler`  |
| HTML         | `htmlboiler`    | Shell       | `shboiler`      |
| CSS          | `cssboiler`     | PowerShell  | `psboiler`      |
| Rust         | `rustboiler`    | Perl        | `perlboiler`    |
| PHP          | `phpboiler`     | Lua         | `luaboiler`     |
| Ruby         | `rubyboiler`    | SQL         | `sqlboiler`     |
| JSON         | `jsonboiler`    | YAML        | `yamlboiler`    |
| XML          | `xmlboiler`     | React (JSX) | `reactjsboiler` |
| Next.js Page | `nextpjsboiler` |             |                 |

> 🔍 Want more languages? [Contribute below](https://github.com/megh-bari/boilerkit#Contributing)

---

### Contributing

Want to contribute your favorite language boilerplate?

#### Add a New Snippet

1. Open `snippets/boiler-snippets.code-snippets`
2. Add a block in the following format:

```json
"<Language> Boilerplate": {
  "prefix": "yourtrigger",
  "body": [
    "your boilerplate code here"
  ],
  "description": "BoilerKit: <Language> Boilerplate"
}
```

3. Add the language to the `contributes.snippets` array in `package.json`

```json
{
  "language": "cpp",
  "path": "./snippets/boiler-snippets.code-snippets"
}
```

4. Open a PR and help others start faster 🚀

### Installation

Search for **BoilerKit** on the VS Code Marketplace or install via CLI:

```bash
code --install-extension megh.BoilerKit
```

---

### 🧩 Author
Made with ❤️ by [@meghb](https://github.com/meghb)

---