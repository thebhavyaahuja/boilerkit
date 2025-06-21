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


#### Programming Languages

| Language   | Trigger      | Language | Trigger        |
| ---------- | ------------ | -------- | -------------- |
| C++        | `cppboiler`  | Swift    | `swiftboiler`  |
| Python     | `pyboiler`   | Kotlin   | `kotlinboiler` |
| JavaScript | `jsboiler`   | C#       | `csboiler`     |
| TypeScript | `tsboiler`   | Dart     | `dartboiler`   |
| Java       | `javaboiler` | Scala    | `scalaboiler`  |
| C          | `cboiler`    | R        | `rboiler`      |
| Go         | `goboiler`   | MATLAB   | `matlabboiler` |
| Rust       | `rustboiler` | Perl     | `perlboiler`   |
| PHP        | `phpboiler`  | Lua      | `luaboiler`    |
| Ruby       | `rubyboiler` | SQL      | `sqlboiler`    |

#### Markup & Config Languages

| Language | Trigger      | Language | Trigger      |
| -------- | ------------ | -------- | ------------ |
| HTML     | `htmlboiler` | XML      | `xmlboiler`  |
| CSS      | `cssboiler`  | YAML     | `yamlboiler` |
| JSON     | `jsonboiler` |          |              |

#### Scripting

| Language     | Trigger    | Language   | Trigger    |
| ------------ | ---------- | ---------- | ---------- |
| Shell Script | `shboiler` | PowerShell | `psboiler` |

#### Frameworks

| Framework   | Trigger         | Framework    | Trigger         |
| ----------- | --------------- | ------------ | --------------- |
| React (JSX) | `reactjsboiler` | Next.js Page | `nextpjsboiler` |

> Want more languages or frameworks? [Contribute below](#Contributing)


### Contributing

Want to contribute your favorite language boilerplate?

#### Add a New Snippet

1. **Fork** the repository
2. Open `snippets/boiler-snippets.code-snippets`
3. Add a block in the following format:

```json
"<Language> Boilerplate": {
  "prefix": "yourtrigger",
  "body": [
    "your boilerplate code here"
  ],
  "description": "BoilerKit: <Language> Boilerplate"
}
```

4. Add the language to the `contributes.snippets` array in `package.json`

```json
{
  "language": "yourlanguage",
  "path": "./snippets/boiler-snippets.code-snippets"
}
```

5. Open a PR and help others start faster 🚀

### Installation

#### Via VS Code Marketplace
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for **BoilerKit**
4. Click "Install"

#### Via Command Line
```bash
code --install-extension megh.BoilerKit
```


> *Save time. Write code. Ship faster.*